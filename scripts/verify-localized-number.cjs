/* eslint-disable @typescript-eslint/no-require-imports -- Standalone React regression runner. */
const fs = require('node:fs'), assert = require('node:assert/strict'), ts = require('typescript');
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<div id="root"></div>', { url: 'https://myeotiji.kr/fr/discount' });
Object.assign(global, { self: dom.window, window: dom.window, document: dom.window.document,
  HTMLElement: dom.window.HTMLElement, Element: dom.window.Element, Node: dom.window.Node, IS_REACT_ACT_ENVIRONMENT: true });
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });
require.extensions['.ts'] = require.extensions['.tsx'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
}).outputText, file);
const { parseLocalizedNumber: parse } = require('../app/_lib/localized-number.ts');
const { COPY, LOCALES } = require('../app/_lib/international.ts');
const { ENHANCEMENT_COPY } = require('../app/_lib/intl-enhancements/copy.ts');
const { EXPANSION } = require('../app/_lib/intl-expansion-content.ts');
const Calculator = require('../app/_components/InternationalCalculator.tsx').default;
const React = require('react'), { createRoot } = require('react-dom/client'), { act } = React;
const root = createRoot(document.getElementById('root'));
let assertions = 0;
function equal(actual, expected) { assert.equal(actual, expected); assertions++; }
for (const locale of LOCALES) {
 const tag=COPY[locale].tag;
 for (const n of [0, .5, 12.5, 1234.5, 1234567.89, -1234567.89]) equal(parse(new Intl.NumberFormat(tag,{maximumFractionDigits:8}).format(n),tag),n);
 equal(parse('0.3',tag),.3); equal(parse('1000.5',tag),1000.5);
 for(const input of ['', ' ', '+', '-', '1 2', '12 34', '1..5','NaN','Infinity','100 USD','0x10','1/2']) { assert(Number.isNaN(parse(input,tag)),`${tag}: invalid ${input}`); assertions++; }
}
for (const [input,tag,expected] of [
 ['100,50','fr',100.5],['1\u202f234,50','fr',1234.5],['1.234,50','es',1234.5],['1.234','es',1234],
 ['1.234,50','pt-BR',1234.5],['1.234,50','id',1234.5],['1.234,50','vi',1234.5],
 ['12,34,567.50','hi',1234567.5],['১২,৩৪,৫৬৭.৫০','bn',1234567.5],['١٬٢٣٤٫٥٠','ar',1234.5],
 ['۱,۲۳۴.۵۰','ur',1234.5],['１２３４.５０','ja',1234.5],['\u200e −12,50','fr',-12.5],
 ]) equal(parse(input,tag),expected);
for(const [input,tag] of [['100,50','en'],['12.34,50','es'],['1,23.50','en'],['1,234.50','es'],['123,456.50','hi'],['100,','fr']]) {
 assert(Number.isNaN(parse(input,tag)),`${input} / ${tag}`);assertions++;
}
// Known untranslated remnants must not return in Vietnamese guides.
const vi=JSON.stringify(EXPANSION.vi.guides);
for(const leak of ['Currency selection changes formatting','The screen rounds','A worked example','Can I compare different payment','Weight each purchase','Calendar months have different lengths','That is a different offer','Divide by 200','Buying above your existing average']) assert(!vi.includes(leak),leak);
function field(label) {
 const el=[...document.querySelectorAll('label')].find(x=>x.querySelector('span')?.textContent===label)?.querySelector('input');
 assert(el,`Missing input ${label}`);return el;
}
async function fill(label,value) { const el=field(label);await act(async()=>{
 Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value').set.call(el,value);el.dispatchEvent(new window.Event('input',{bubbles:true}));
}); }
const errors=[];console.error=(...args)=>errors.push(args.join(' '));
(async()=>{
 let cases=0;
 for(const locale of LOCALES) {
  await act(async()=>root.render(React.createElement(Calculator,{locale,tool:'discount',key:locale})));
  const tag=COPY[locale].tag, label=COPY[locale].tools.discount.fields[0];
  equal(field(label).type,'text');equal(field(label).inputMode,'decimal');equal(field(label).dir,'ltr');
  await fill(label,new Intl.NumberFormat(tag).format(100.5));
  const output=document.querySelector('section[aria-live] strong').textContent;
  assert(output.includes(new Intl.NumberFormat(tag,{minimumFractionDigits:2,maximumFractionDigits:2}).format(72.36)),`${locale}: parsed discount result ${output}`);
  if(locale==='fr') {
    await fill(ENHANCEMENT_COPY.fr.shipping,'1,50');
    assert(document.querySelector('[data-enhancement] [role=status]').textContent.includes('73,86'));
  }
  await fill(label,'');assert(document.querySelector('section[aria-live] [role=alert]'),'Empty input must not become zero');
  cases++;
 }
 await act(async()=>root.unmount());assert.equal(errors.length,0,errors.join('\n'));
 console.log(JSON.stringify({status:'PASS',parserAssertions:assertions,localizedReactCases:cases,decimalKeyboard:true,blankIsInvalid:true,knownVietnameseLeaksRemoved:true}));
})().catch(e=>{process.stderr.write(e.stack+'\n');process.exitCode=1;});
