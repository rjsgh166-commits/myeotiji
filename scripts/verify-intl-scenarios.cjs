/* eslint-disable @typescript-eslint/no-require-imports -- Standalone React regression runner. */
const fs = require('node:fs'), assert = require('node:assert/strict'), ts = require('typescript');
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<div id="root"></div>', { url: 'https://myeotiji.kr/id/discount' });
Object.assign(global, { self: dom.window, window: dom.window, document: dom.window.document,
  HTMLElement: dom.window.HTMLElement, Element: dom.window.Element, Node: dom.window.Node, IS_REACT_ACT_ENVIRONMENT: true });
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });
require.extensions['.ts'] = require.extensions['.tsx'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
}).outputText, file);
const { couponScenario, feeScenario, unitPrice, savingsGoal } = require('../app/_lib/intl-enhancements/math.ts');
const { ENHANCEMENT_COPY } = require('../app/_lib/intl-enhancements/copy.ts');
const { enhanceGuide } = require('../app/_lib/intl-enhancements/guides.ts');
const { COPY } = require('../app/_lib/international.ts');
const Calculator = require('../app/_components/InternationalCalculator.tsx').default;
const React = require('react'), { createRoot } = require('react-dom/client'), { act } = React;
const root = createRoot(document.getElementById('root'));
const errors = []; console.error = (...args) => errors.push(args.join(' '));
function close(actual, expected, tolerance = 1e-7) { assert(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected}`); }
// Independent worked examples, threshold boundaries, overflow, and negative-return cases.
const coupon = couponScenario(1000, 20, 10, 0, 50, 500, 30, 5, 0, false);
assert.deepEqual(coupon, { subtotal: 800, eligible: true, coupon: 50, pay: 780, reward: 37.5, effective: 742.5 });
assert.equal(couponScenario(1000,20,10,0,50,801,30,5,0,false).coupon,0);
assert.equal(couponScenario(1000,20,10,0,50,800,30,5,0,false).coupon,50);
assert.equal(couponScenario(1000,20,0,900,0,0,30,100,0,true).pay,30);
assert.equal(couponScenario(1000,0,0,0,0,0,0,50,20,false).reward,20);
assert.equal(couponScenario(100,0,101,0,0,0,0,0,0,false),null);
assert.equal(couponScenario(100,0,0,0,0,0,-1,0,0,false),null);
assert.equal(couponScenario(NaN,0,0,0,0,0,0,0,0,false),null);
close(feeScenario(100,3,.3,false,2).net,96.7);
close(feeScenario(100,2,1,false,2).net,97);
close(feeScenario(100,3,.3,true,2).gross,103.41);
close(feeScenario(100,2,1,true,2).gross,103.07);
for (const digits of [0,2,3]) for (const rate of [0,3,99.99]) {
  const r=feeScenario(100,rate,.3,true,digits); assert(r.net >= 100 - 1e-7);
  assert((r.gross - 10 ** -digits) * (1-rate/100) - .3 < 100);
}
assert.equal(feeScenario(100,100,0,true,2),null);
close(unitPrice(6,750,'g').per,8); close(unitPrice(7.5,1,'kg').per,7.5);
close(unitPrice(2,500,'mL').per,4); assert.equal(unitPrice(0,1,'item').per,0);
assert.equal(unitPrice(5,0,'kg'),null); assert.equal(unitPrice(5,1,'kg').family,'mass');
close(savingsGoal(1000,0,1,2200).monthly,100);
assert.equal(savingsGoal(1000,5,1,100).monthly,0);
assert.equal(savingsGoal(0,5,.001,100),null);
for (const annual of [-99,-5,0,1e-9,5,100]) {
  const r = savingsGoal(1000,annual,2,5000); let balance=1000;
  const m=(1+annual/100)**(1/12)-1;
  for(let i=0;i<24;i++) balance=balance*(1+m)+r.monthly;
  close(balance,5000,.000001);
}
const dummy={title:'t',description:'d',answer:'a',sections:[],faqs:[]};
for(const locale of Object.keys(ENHANCEMENT_COPY)) for(const tool of ['discount','fee','unit-converter','compound']) {
  const guide=enhanceGuide(locale,tool,dummy); assert.equal(guide.sections.length,1); assert(guide.sections[0].paragraphs.length===2);
}
function field(label, scope=document) {
  const el=[...scope.querySelectorAll('label')].find(x=>x.querySelector('span')?.textContent===label)?.querySelector('input,select');
  assert(el,`Missing field ${label}`); return el;
}
async function fill(label,value) { const el=field(label); await act(async()=>{
  const prototype=el.tagName==='SELECT'?window.HTMLSelectElement.prototype:window.HTMLInputElement.prototype;
  Object.getOwnPropertyDescriptor(prototype,'value').set.call(el,String(value));
  el.dispatchEvent(new window.Event(el.tagName==='SELECT'?'change':'input',{bubbles:true}));
}); }
function values(locale) {
  const format=new Intl.NumberFormat(COPY[locale].tag);
  return [...document.querySelectorAll('[data-enhancement] strong')].map(el=>{
    let s=el.textContent;
    // Strip currency before mapping digits, for Arabic and Bengali output too.
    for(const currency of ['USD','VND','IDR','INR','EUR','EGP','BDT','PKR','BRL'])
      for(const part of new Intl.NumberFormat(COPY[locale].tag,{style:'currency',currency}).formatToParts(1)) if(part.type==='currency') s=s.split(part.value).join('');
    for(let n=0;n<10;n++) s=s.split(format.format(n)).join(String(n));
    const parts=format.formatToParts(12345.6);
    for(const p of parts) if(p.type==='group') s=s.split(p.value).join('');
    s=s.split(parts.find(p=>p.type==='decimal').value).join('.');
    return Number(s.replace(/[^\d.\-]/g,''));
  });
}
(async()=>{
 let cases=0;
 for(const [locale,c] of Object.entries(ENHANCEMENT_COPY)) for(const tool of ['discount','fee','unit-converter','compound']) {
  await act(async()=>root.render(React.createElement(Calculator,{locale,tool,key:`${locale}-${tool}`})));
  assert.equal(document.querySelectorAll('[data-enhancement]').length,1);
  // Choose USD so fractional examples are visible even in VND locales.
  await fill(COPY[locale].currency,'USD');
  const labels=COPY[locale].tools[tool].fields;
  if(tool==='discount') {
    await fill(labels[0],1000); await fill(c.cap,50); await fill(c.minimum,500); await fill(c.shipping,30); await fill(c.cashback,5);
    assert.deepEqual(values(locale),[50,780,37.5,742.5]);
    await fill(c.minimum,801); assert.deepEqual(values(locale),[0,830,40,790]);
    await fill(c.fixedMode,'fixed'); await fill(c.fixedCoupon,100); await fill(c.minimum,0); await fill(c.cap,0);
    assert.deepEqual(values(locale),[100,730,35,695]);
    await fill(c.cashback,''); assert(document.querySelector('[data-enhancement] [role=alert]'));
  }
  if(tool==='fee') {
    assert.deepEqual(values(locale),[100,3.3,96.7,100,3,97]);
    const button=[...document.querySelectorAll('button')].find(b=>b.textContent===COPY[locale].tools.fee.modes[1]);
    await act(async()=>button.click()); const results=values(locale); close(results[0],103.41); close(results[3],103.07);
    await fill(`${c.optionB} · ${c.rate}`,100); assert(document.querySelector('[data-enhancement] [role=alert]'));
  }
  if(tool==='unit-converter') {
    await fill(c.priceA,6); await fill(c.priceB,7.5); close(values(locale)[0],8); close(values(locale)[1],7.5); close(values(locale)[3],6.25);
    await fill(c.unitB,'L'); assert(document.querySelector('[data-enhancement] [role=alert]').textContent===c.incompatible);
    await fill(c.unitB,'kg'); await fill(c.quantityA,0); assert(document.querySelector('[data-enhancement] [role=alert]'));
    await fill(c.quantityA,750); await fill(c.priceA,0); close(values(locale)[0],0);
  }
  if(tool==='compound') {
    await fill(labels[0],1000); await fill(labels[1],100); await fill(labels[2],0); await fill(labels[3],1); await fill(c.goal,2200);
    assert.deepEqual(values(locale),[100,12,2200,1960,2440]);
    await fill(c.goal,100); close(values(locale)[0],0); assert(document.querySelector('[data-enhancement]').textContent.includes(c.already));
    await fill(labels[3],.001); assert(document.querySelector('[data-enhancement] [role=alert]'));
  }
  cases++;
 }
 for(const locale of ['en','ja','zh-hans']) {
   await act(async()=>root.render(React.createElement(Calculator,{locale,tool:'discount',key:locale})));
   assert.equal(document.querySelectorAll('[data-enhancement]').length,0);
 }
 if(process.argv.includes('--rendered')) {
   const path=require('node:path');
   const { INTERNATIONAL_GUIDES }=require('../app/_lib/intl-guides/index.ts');
   const built=path.resolve(__dirname,'../.next/server/app');
   for(const [locale,c] of Object.entries(ENHANCEMENT_COPY)) for(const tool of ['discount','fee','unit-converter','compound']) {
     const html=fs.readFileSync(path.join(built,locale,tool+'.html'),'utf8');
     const page=new JSDOM(html).window.document;
     const heading=({discount:c.couponTitle,fee:c.feeTitle,'unit-converter':c.unitTitle,compound:c.goalTitle})[tool];
     assert(page.querySelector('[data-enhancement="'+tool+'"] h2').textContent===heading);
     assert(page.querySelector('meta[name="description"]').content.includes(heading));
     const guide=INTERNATIONAL_GUIDES.find(g=>g.locale===locale&&g.tool===tool);
     const article=fs.readFileSync(path.join(built,locale,'guides',guide.slug+'.html'),'utf8');
     const doc=new JSDOM(article).window.document;
     assert.equal(doc.querySelector('h1').textContent,heading);
     for(const text of guide.sections[0].paragraphs) assert(doc.querySelector('article').textContent.includes(text));
     for(const row of guide.sections[0].table.rows) for(const cell of row) assert(doc.querySelector('article').textContent.includes(cell));
     assert(doc.querySelector('a[href="/'+locale+'/'+tool+'"]'));
     page.defaultView.close(); doc.defaultView.close();
   }
 }
 await act(async()=>root.unmount()); assert.equal(errors.length,0,errors.join('\n'));
 console.log(JSON.stringify({status:'PASS',localizedScenarioCases:cases,unchangedOriginalLocales:3,edgeCases:'coupon eligibility, fixed/percent caps, deferred cashback, reverse rounding, incompatible units, zero/negative returns, tiny duration, blank input'}));
})().catch(e=>{process.stderr.write(e.stack+'\n');process.exitCode=1;});
