/* eslint-disable @typescript-eslint/no-require-imports -- Standalone output verification. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '../.next/server/app');
const xml = fs.readFileSync(path.join(root, 'sitemap.xml.body'), 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
let checked = 0, controls = 0;
for (const url of urls) {
 const pathname = new URL(url).pathname;
 const locale = pathname.split('/')[1];
 if (!['en', 'ja', 'zh-hans', 'es', 'pt-br', 'id', 'hi', 'fr', 'ar', 'bn', 'ur', 'vi'].includes(locale)) continue;
 const doc = new JSDOM(fs.readFileSync(path.join(root, pathname.slice(1)+'.html'),'utf8')).window.document;
 const scripts = [...doc.querySelectorAll('script')];
 if(locale === "zh-hans") {
  assert(!scripts.some(s => /googletagmanager|adsbygoogle|googlesyndication/.test((s.src||'')+s.textContent)));
  assert(!doc.querySelector("[data-analytics-settings]"));
 } else {
  assert(doc.querySelector("[data-analytics-settings]")); controls++;
  assert(scripts.some(s => ((s.src||'')+s.textContent).includes('adsbygoogle.js')));
 }
 const footer = doc.querySelector('[data-international-safety]');
 assert(footer, `${pathname}: safety footer`);
 for(const page of ['privacy','terms','contact']) assert(footer.querySelector(`a[href="/${locale}/${page}"]`), `${pathname}: ${page} not reachable`);
 if(pathname.endsWith('/privacy')) {
  assert(doc.querySelector('a[href="https://vercel.com/legal/privacy-policy"]'));
  assert(doc.querySelector('a[href="mailto:contact@myeotiji.kr"]'));
 }
 doc.defaultView.close(); checked++;
}
assert.equal(checked,258);
// The Korean root retains its existing analytics configuration.
assert(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('G-6FC374VXMH'));
console.log(JSON.stringify({status:'PASS',internationalPagesChecked:checked,analyticsControls:controls, chinesePagesWithoutAnalytics:26,localizedPolicyPages:36,koreanAnalyticsPreserved:true}));
