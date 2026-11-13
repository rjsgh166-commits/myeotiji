/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS regression runner uses the repository React instance. */
// Regression checks render the production React component and dispatch real DOM input events.
// Run with npm run test:country. No analytics or network requests are sent.
const fs=require('fs'),path=require('path'),Module=require('module'),assert=require('assert/strict');
const repo=path.resolve(__dirname,'..'),req=Module.createRequire(path.join(repo,'package.json'));
const {JSDOM}=require('jsdom');
const dom=new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>',{url:'https://myeotiji.kr/en'});
Object.assign(global,{self:dom.window,window:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,Element:dom.window.Element,Node:dom.window.Node,IS_REACT_ACT_ENVIRONMENT:true});
Object.defineProperty(global,'navigator',{value:dom.window.navigator,configurable:true});
const ts=req('typescript'),React=req('react'),{act}=React,{createRoot}=req('react-dom/client');
function load(file){const m=new Module(file,module);m.filename=file;m.paths=Module._nodeModulePaths(path.dirname(file));let text=fs.readFileSync(file,'utf8');text=text.replace('"../_lib/countryTools"',JSON.stringify(path.join(repo,'app/_lib/countryTools.ts')));m._compile(ts.transpileModule(text,{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2020}}).outputText,file);return m.exports;}
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,f);
const {COUNTRY_TOOLS}=load(path.join(repo,'app/_lib/countryTools.ts'));
const Country=load(path.join(repo,'app/_components/CountryCalculator.tsx')).default;
const root=createRoot(document.getElementById('root'));let assertions=0,errors=[];
console.error=(...args)=>errors.push(args.join(' '));
async function open(id){const entry=COUNTRY_TOOLS.find(e=>e.id===id);await act(async()=>{root.render(React.createElement(Country,{entry,key:id+Math.random()}))});}
function label(name){let n=[...document.querySelectorAll('label')].find(e=>e.querySelector('span')?.textContent===name);assert(n,'missing field '+name);return n.querySelector('input,select');}
async function fill(name,v){const n=label(name),proto=n.tagName==='SELECT'?window.HTMLSelectElement.prototype:window.HTMLInputElement.prototype;await act(async()=>{Object.getOwnPropertyDescriptor(proto,'value').set.call(n,String(v));n.dispatchEvent(new window.Event(n.tagName==='SELECT'?'change':'input',{bubbles:true}));});}
function result(name){let n=[...document.querySelectorAll('section[aria-live] div')].find(e=>e.querySelector('span')?.textContent===name);assert(n,'missing result '+name+'; body='+document.body.textContent.slice(0,500));return n.querySelector('strong').textContent;}
function numeric(name){return Number(result(name).replace(/[^\d.\-]/g,''));}
function eq(name,value){assert.equal(result(name),value,name);assertions++;}
function near(name,value,tol=.011){assert(Math.abs(numeric(name)-value)<tol,`${name}: ${numeric(name)} != ${value}`);assertions++;}
function invalid(){assert(document.querySelector('[role="alert"]'),'expected invalid alert');assertions++;}
(async()=>{
await open('401k-match');near('Employee annual contribution',4800);near('Estimated employer match',2400);
await fill('Annual eligible salary ($)',1000000);await fill('Your deferral percentage (%)',100);near('Employee annual contribution',25500);await fill('Tax year','2026');near('Employee annual contribution',24500);
await fill('Annual eligible salary ($)',0);near('Total annual additions',0);await fill('Annual eligible salary ($)','');invalid();await fill('Annual eligible salary ($)',-1);invalid();
await open('overtime-pay');near('Total weekly gross pay',950);await fill('Hours worked this workweek',40);near('Overtime pay (1.5×)',0);await fill('Hours worked this workweek',40.5);near('Overtime pay (1.5×)',15);await fill('Hours worked this workweek',169);invalid();await fill('Hours worked this workweek',0);near('Total weekly gross pay',0);assert.equal(label('Regular hourly rate ($)').max,'100000');assertions++;
await open('take-home-pay');near('Estimated federal income tax',7890);near('Employee Social Security & Medicare',6120);near('Estimated annual net',57990);await fill('Federal filing status','joint');near('Estimated annual net',61120);
await fill('Annual gross W-2 wages ($)',300000);await fill('Traditional 401(k) contribution (%)',0);await fill('Optional estimated state/local tax (% of gross pay)',0);near('Employee Social Security & Medicare',16689);near('Estimated annual net',233843);
await fill('Annual gross W-2 wages ($)',0);near('Estimated annual net',0);await fill('Traditional 401(k) contribution (%)',101);invalid();
await open('income-wall');near('概算年収',1440000,1);eq('短時間労働者の社会保険加入目安','対象となる可能性あり');near('会社の社会保険・本人負担概算',216000,1);await fill('適用対象となる企業規模（厚生年金の被保険者数）',50);eq('短時間労働者の社会保険加入目安','この簡易条件では対象外');await fill('適用対象となる企業規模（厚生年金の被保険者数）',51);await fill('週の所定労働時間',19.9);eq('短時間労働者の社会保険加入目安','この簡易条件では対象外');await fill('週の所定労働時間',20);await fill('学生区分','yes');eq('短時間労働者の社会保険加入目安','この簡易条件では対象外');await fill('適用対象となる企業規模（厚生年金の被保険者数）',50.5);invalid();
await open('furusato-tax');near('自己負担2,000円の寄附上限目安',39599,1);near('推定自己負担額',2000,1);await fill('寄附予定額（円）',0);near('推定自己負担額',0,1);await fill('所得税の限界税率（課税所得に応じて選択）',0);near('自己負担2,000円の寄附上限目安',35333,1);await fill('住民税所得割額（円／年）',0);near('自己負担2,000円の寄附上限目安',2000,1);
await open('commuter-pass');eq('安い方','同額');near('定期券が厳密に安くなる最小往復日数',21,1);await fill('月の往復出社日数',21);eq('安い方','定期券が有利');await fill('月の往復出社日数',19);eq('安い方','都度払いが有利');await fill('片道のIC運賃・切符運賃（円）',0);eq('定期券が厳密に安くなる最小往復日数','比較不可');await fill('月の往復出社日数',19.5);invalid();
await open('five-insurances-fund');near('五险一金个人扣款合计（估算）',3378);await fill('社保申报缴费工资基数（元）',0);await fill('住房公积金申报缴费基数（元）',0);near('养老保险个人缴费（8%）',581.6);near('住房公积金个人缴费',304.8);await fill('社保申报缴费工资基数（元）',999999);await fill('住房公积金申报缴费基数（元）',999999);near('养老保险个人缴费（8%）',2907.84);near('住房公积金个人缴费',4361.76);await fill('社保申报缴费工资基数（元）',-1);invalid();
await open('income-tax');near('本月应预扣个税（模拟）',630);near('截至本月累计预扣个税',1680);near('全年预估工资薪金预扣税额',5880);await fill('当前月份（同一单位1月起工作）',1);near('本月应预扣个税（模拟）',210);await fill('每月税前工资（元）',0);near('本月应预扣个税（模拟）',0);await fill('每月三险一金等专项扣除（元）','');invalid();
// Independent prefix-sum oracle over the entire published 2027 calendar.
const holidays=[['new-year','2027-01-01','2027-01-03'],['spring-festival','2027-02-05','2027-02-13'],['qingming','2027-04-03','2027-04-05'],['labor','2027-05-01','2027-05-05'],['dragon-boat','2027-06-09','2027-06-09'],['mid-autumn','2027-09-15','2027-09-15'],['national','2027-10-01','2027-10-07']];
const day=s=>Math.round(Date.parse(s+'T00:00:00Z')/86400000),year=day('2027-01-01'),makeup=new Set(['2027-01-31','2027-02-14','2027-05-08','2027-09-26','2027-10-09'].map(day));let off=new Set();for(const [,a,b]of holidays)for(let i=day(a);i<=day(b);i++)off.add(i);let prefix=[0];for(let i=0;i<365;i++){let d=year+i,w=new Date(d*86400000).getUTCDay();prefix.push(prefix[i]+Number(makeup.has(d)||(!off.has(d)&&w!==0&&w!==6)));}
function oracle(a,b,budget){let best=0,leave=Infinity;for(let l=0;l<=day(a)-year;l++)for(let r=day(b)-year;r<365;r++){let used=prefix[r+1]-prefix[l];if(used>budget)break;if(r-l+1>best||(r-l+1===best&&used<leave)){best=r-l+1;leave=used;}}return{best,leave};}
await open('2027-holidays');for(const[id,a,b]of holidays){await fill('选择2027年节日',id);for(let budget=0;budget<=7;budget++){await fill('可使用的年假天数（0–7）',budget);const expected=oracle(a,b,budget);near('最长连续休息时间（含年假）',expected.best,.1);near('需要请假的工作日',expected.leave,.1);const range=result('连续休假日期').split(' ～ ').map(day);assert(range[0]<=day(a)&&range[1]>=day(b)&&range[0]>=year&&range[1]<year+365);assertions++;}}
await fill('可使用的年假天数（0–7）',1.5);invalid();await fill('可使用的年假天数（0–7）',8);invalid();await fill('可使用的年假天数（0–7）','');invalid();
await act(async()=>root.unmount());assert.equal(errors.length,0,errors.join('\n'));console.log(JSON.stringify({status:'PASS',calculators:9,assertions,holidayCombinations:56,reactErrors:errors.length}));
})().catch(e=>{process.stderr.write(require('util').inspect(e,{depth:5})+'\n'+errors.join('\n'));process.exitCode=1;});
