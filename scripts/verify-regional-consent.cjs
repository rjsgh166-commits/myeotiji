/* eslint-disable @typescript-eslint/no-require-imports -- Standalone region/CMP integration regression runner. */
const fs=require('node:fs'), assert=require('node:assert/strict'), ts=require('typescript'), Module=require('node:module');
const {JSDOM}=require('jsdom');
const dom=new JSDOM('<div id="root"></div>',{url:'https://myeotiji.kr/en/compound?amount=private-input',referrer:'https://m.search.naver.com/search.naver?query=secret-term'});
Object.assign(global,{window:dom.window,document:dom.window.document,localStorage:dom.window.localStorage,IS_REACT_ACT_ENVIRONMENT:true});
const loader=Module._load;Module._load=function(name,...args){if(name==='next/navigation')return{usePathname:()=>'/en/compound'};return loader.call(this,name,...args);};
require.extensions['.ts']=require.extensions['.tsx']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2020}}).outputText,f);
const {CONSENT_REGIONS,consentRequired,analyticsPermitted,readCmpAnalytics}=require('../app/_lib/regional-consent.ts');
const {GET}=require('../app/api/privacy-region/route.ts');
const Analytics=require('../app/_components/InternationalAnalytics.tsx').default;
const {safeSearchReferrer}=require('../app/_lib/analytics-referrer.ts');
for(const value of ['', 'invalid', 'javascript:alert(1)', 'https://private.example/secret', 'https://google.com.evil.com/', 'https://user:pass@www.google.com/', 'https://www.google.com:8443/'])assert.equal(safeSearchReferrer(value),'');
assert.equal(safeSearchReferrer('https://m.search.naver.com/search.naver?query=secret#secret'),'https://m.search.naver.com/');
assert.equal(safeSearchReferrer('https://www.google.co.jp/search?q=secret'),'https://www.google.co.jp/');
const Korean=require('../app/_components/KoreanRegionalAnalytics.tsx').default;
const {trackEvent}=require('../app/_lib/analytics.ts');
const React=require('react'),{act}=React,{createRoot}=require('react-dom/client');
const enums={CONSENT_MODE_PURPOSE_STATUS_UNKNOWN:10,CONSENT_MODE_PURPOSE_STATUS_GRANTED:20,CONSENT_MODE_PURPOSE_STATUS_DENIED:30,CONSENT_MODE_PURPOSE_STATUS_NOT_APPLICABLE:40,CONSENT_MODE_PURPOSE_STATUS_NOT_CONFIGURED:50};
let root, status=enums.CONSENT_MODE_PURPOSE_STATUS_UNKNOWN, ready=false, entries=[],tcfListener,removals=0,revocations=0;
let fetchRequired=false,fetchFails=false;
let requests=[];
const scripts=()=>document.querySelectorAll('script[data-international-analytics],script[data-korean-regional-analytics]');
function reset(){
 localStorage.clear();window.dataLayer=[];window.gtag=undefined;window.myeotijiAnalyticsAllowed=false;
 for(const c of document.cookie.split(';'))document.cookie=c.split('=')[0].trim()+'=;max-age=0;path=/';
 status=enums.CONSENT_MODE_PURPOSE_STATUS_UNKNOWN;ready=false;entries=[];tcfListener=undefined;requests=[];
 window.googlefc={callbackQueue:{push(entry){entries.push(entry);if(entry.CONSENT_API_READY)entry.CONSENT_API_READY();if(ready&&entry.CONSENT_MODE_DATA_READY)entry.CONSENT_MODE_DATA_READY();if(ready&&entry.CONSENT_DATA_READY)entry.CONSENT_DATA_READY();return entries.length;}},
  ConsentModePurposeStatusEnum:enums,getGoogleConsentModeValues:()=>({analyticsStoragePurposeConsentStatus:status}),showRevocationMessage:()=>revocations++};
 window.__tcfapi=(command,version,callback)=>{assert.equal(version,2);if(command==='addEventListener')tcfListener=callback;else if(command==='removeEventListener')removals++;};
 global.fetch=async(url,options)=>{assert.equal(options.credentials,'omit');assert.equal(options.referrerPolicy,'no-referrer');requests.push({url,cache:options.cache});if(fetchFails)throw Error('Region service unavailable');return{ok:true,json:async()=>({consentRequired:fetchRequired})};};
 root=createRoot(document.getElementById('root'));
}
async function render(component=Analytics){await act(async()=>root.render(React.createElement(component,component===Analytics?{locale:'en'}:{measurementId:'G-6FC374VXMH'})));}
async function unmount(){await act(async()=>root.unmount());}
async function update(next){await act(async()=>{status=next;ready=true;for(const entry of entries.slice())entry.CONSENT_MODE_DATA_READY?.();});}
async function tcfUpdate(next){await act(async()=>{status=next;tcfListener({listenerId:42},true);await new Promise(resolve=>setTimeout(resolve,5));});}
async function click(text){await act(async()=>[...document.querySelectorAll('button')].find(b=>b.textContent===text).click());}
const errors=[];console.error=(...args)=>errors.push(args.join(' '));
(async()=>{
 assert.equal(CONSENT_REGIONS.length,32);
 for(const country of CONSENT_REGIONS)assert.equal(consentRequired(country),true);
 for(const country of ['US','JP','KR','BR','IN','ID','VN','PK','BD'])assert.equal(consentRequired(country),false);
 for(const country of [null,'','ZZ','XX','usa','US,FR'])assert.equal(consentRequired(country),null);
 for(const value of [true,null]) {
  assert.equal(analyticsPermitted(value,'waiting'),false);assert.equal(analyticsPermitted(value,'denied'),false);assert.equal(analyticsPermitted(value,'granted'),true);
 }
 assert.equal(analyticsPermitted(false,'waiting'),true);assert.equal(analyticsPermitted(false,'denied'),false);
 assert.equal(readCmpAnalytics({callbackQueue:[],getGoogleConsentModeValues:()=>({analyticsStoragePurposeConsentStatus:undefined})}),'waiting');
 const oldVercel=process.env.VERCEL;
 try{
  process.env.VERCEL='1';
  for(const [country,expected] of [['FR',true],['GB',true],['CH',true],['US',false],['JP',false],['ZZ',null]]){
   const response=GET(new Request('https://myeotiji.kr/api/privacy-region',{headers:{'x-vercel-ip-country':country,'x-forwarded-for':'192.0.2.1'}}));
   assert.deepEqual(await response.json(),{consentRequired:expected});assert(response.headers.get('cache-control').includes('no-store'));assert.equal(response.headers.get('x-robots-tag'),'noindex');assert.equal(response.headers.get('set-cookie'),null);
  }
  delete process.env.VERCEL;assert.deepEqual(await GET(new Request('https://local/api/privacy-region',{headers:{'x-vercel-ip-country':'US'}})).json(),{consentRequired:null});
 }finally{if(oldVercel===undefined)delete process.env.VERCEL;else process.env.VERCEL=oldVercel;}
 // Outside consent-required regions: retain default-on analytics and opt-out.
 fetchRequired=false;fetchFails=false;reset();await render();assert.equal(scripts().length,1);assert.equal(window.myeotijiAnalyticsAllowed,true);
 assert.deepEqual(requests,[{url:'/api/privacy-region',cache:'no-store'}]);
 await click('Reject analytics');assert.equal(scripts().length,0);await unmount();
 // Required regions: no Google Analytics script/event before a valid purpose grant.
 fetchRequired=true;reset();await render();assert.equal(scripts().length,0);assert.equal(window.dataLayer.length,0);
 assert.equal(document.querySelector('[data-analytics-permission]').dataset.analyticsPermission,'blocked');
 await update(enums.CONSENT_MODE_PURPOSE_STATUS_NOT_CONFIGURED);assert.equal(scripts().length,0);
 await update(enums.CONSENT_MODE_PURPOSE_STATUS_NOT_APPLICABLE);assert.equal(scripts().length,0);
 await update(enums.CONSENT_MODE_PURPOSE_STATUS_GRANTED);assert.equal(scripts().length,1);
 assert(!JSON.stringify(window.dataLayer).includes('private-input'));assert(!JSON.stringify(window.dataLayer).includes('secret-term'));
 const configs=window.dataLayer.map(x=>Array.from(x)).filter(x=>x[0]==='config');
 assert.equal(configs.at(-1)[2].page_referrer,'https://m.search.naver.com/');
 document.cookie='myeotiji_intl_ga=test;path=/';document.cookie='_ga=korean;path=/';
 await tcfUpdate(enums.CONSENT_MODE_PURPOSE_STATUS_DENIED);assert.equal(scripts().length,0);assert.equal(window['ga-disable-G-6FC374VXMH'],true);
 assert(!document.cookie.includes('myeotiji_intl_ga='));assert(document.cookie.includes('_ga=korean'));
 await update(enums.CONSENT_MODE_PURPOSE_STATUS_GRANTED);assert.equal(scripts().length,1);
 await click('Manage regional consent');assert.equal(revocations,1);assert.equal(scripts().length,0);
 await update(enums.CONSENT_MODE_PURPOSE_STATUS_GRANTED);await click('Reject analytics');await update(enums.CONSENT_MODE_PURPOSE_STATUS_GRANTED);assert.equal(scripts().length,0);
 await click('Allow analytics');assert.equal(scripts().length,1);await unmount();assert(removals>0);
 // Region outage: fail closed; no implicit grant from a stale local opt-in.
 fetchFails=true;reset();localStorage.setItem('myeotiji-international-analytics-v1','allowed');await render();assert.equal(scripts().length,0);
 await update(enums.CONSENT_MODE_PURPOSE_STATUS_NOT_CONFIGURED);assert.equal(scripts().length,0);await unmount();
 // The Korean root uses the same gate and drops events while blocked.
 fetchFails=false;fetchRequired=true;reset();await render(Korean);trackEvent('test_event',{calculator:'compound'});assert.equal(window.dataLayer.length,0);assert.equal(scripts().length,0);
 await update(enums.CONSENT_MODE_PURPOSE_STATUS_GRANTED);assert.equal(scripts().length,1);trackEvent('test_event',{calculator:'compound'});
 assert(window.dataLayer.some(c=>Array.from(c)[1]==='test_event'));
 assert.equal(window.dataLayer.map(c=>Array.from(c)).find(c=>c[0]==='config')[2].page_referrer,'https://m.search.naver.com/');
 assert(!JSON.stringify(window.dataLayer).includes('secret-term'));
 document.cookie='_ga=test;path=/';await tcfUpdate(enums.CONSENT_MODE_PURPOSE_STATUS_DENIED);assert.equal(scripts().length,0);assert(!document.cookie.includes('_ga='));
 const count=window.dataLayer.length;trackEvent('blocked_event');assert.equal(window.dataLayer.length,count);await unmount();
 fetchRequired=false;reset();await render(Korean);assert.equal(scripts().length,1);await unmount();
 assert.equal(errors.length,0,errors.join('\n'));
 console.log(JSON.stringify({status:'PASS',requiredRegions:32,nonRegionalDefaultAllowed:true,noPreConsentAnalytics:true,cmpGrantDenyRevoke:true,localRejectionOverridesCmp:true,unknownRegionFailsClosed:true,regionApiPrivate:true,koreanGate:true}));
 dom.window.close();
})().catch(e=>{process.stderr.write(e.stack+'\n');process.exitCode=1;});
