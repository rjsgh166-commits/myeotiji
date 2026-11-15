/* eslint-disable @typescript-eslint/no-require-imports -- Standalone rendered navigation regression. */
const fs=require('node:fs'), path=require('node:path'), assert=require('node:assert/strict'), {JSDOM}=require('jsdom');
const root=path.resolve(__dirname,'../.next/server/app');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml.body'),'utf8');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]), known=new Set(urls);
let calculators=0, scenarios=0, choosers=0;
for(const url of urls){
 const pathname=new URL(url).pathname, file=pathname==='/'?'index.html':pathname.slice(1)+'.html';
 const dom=new JSDOM(fs.readFileSync(path.join(root,file),'utf8')),doc=dom.window.document;
 for(const nav of doc.querySelectorAll('[data-mobile-ui="calculator-nav"]')){
  calculators++;
  for(const link of nav.querySelectorAll('a')){
   assert(link.hash && link.hash!=='#',`${pathname}: a real fragment target is required`);
   const id=link.hash.slice(1), targets=[...doc.querySelectorAll('[id]')].filter(e=>e.id===id);
   assert.equal(targets.length,1,`${pathname}: exactly one target for ${id}`);
   assert.equal(targets[0].getAttribute('tabindex'),'-1',`${pathname}: keyboard-focusable destination`);
   assert(targets[0].hasAttribute('data-mobile-target'));
   if(id==='calculator-extra')scenarios++;
  }
 }
 const disclosure=doc.querySelector('[data-mobile-language]');
 if(disclosure){
  choosers++;
  assert(!disclosure.hasAttribute('open'),'language list is collapsed on arrival');
  assert(disclosure.querySelector('summary').textContent.trim());
  const links=[...disclosure.querySelectorAll('a')];assert.equal(links.length,12);
  assert.equal(links.filter(a=>a.getAttribute('aria-current')==='page').length,1);
  for(const link of links){assert(known.has(new URL(link.getAttribute('href'),url).href),`${pathname}: missing language destination`);assert(link.hreflang);}
 }
 if(pathname==='/'){
  const search=doc.querySelector('[data-home-search]'),cards=doc.querySelector('[data-home-thresholds]');
  assert(search.compareDocumentPosition(cards)&dom.window.Node.DOCUMENT_POSITION_FOLLOWING,'search precedes entry cards in reading and keyboard order');
  assert.equal(doc.querySelectorAll('input[type="search"]').length,1,'no duplicate hidden search field');
 }
 dom.window.close();
}
assert.equal(calculators,96); // 84 shared + 9 country + salary/loan/fee
assert.equal(scenarios,36);
assert.equal(choosers,249); // 84 tools + 12 homes + 93 guides + 12 policies + 12 guide hubs + 36 legal pages
console.log(JSON.stringify({status:'PASS',calculatorNavigations:calculators,scenarioTargets:scenarios,languageChoosers:choosers,allTargetsUniqueAndFocusable:true,languageUrlsPreserved:true,searchBeforeCards:true}));
