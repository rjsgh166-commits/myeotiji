/* eslint-disable @typescript-eslint/no-require-imports -- Node CommonJS regression runner uses the repository React instance. */
// Run after npm run build. Korean fingerprints were captured from v35 main.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const output = path.resolve(__dirname, '../.next/server/app');
const baseline = require('./fixtures/korean-v35-seo.json');
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
function metaTags(source) {
  const head = source.includes('<head>') ? source.match(/<head>([\s\S]*?)<\/head>/)[1] : source;
  // Asset content-version queries can change across builds; paths must stay identical.
  return (head.replace(/\?(?:opengraph-image|twitter-image)\.[^"<]+/g, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>|<link[^>]*rel="(?:preload|stylesheet)"[^>]*>/g, '')
    .match(/<meta[^>]*>|<link[^>]*>|<title>[\s\S]*?<\/title>/g) || []).sort().join('\n');
}
const decoder = new JSDOM('').window.document.createElement('textarea');
function bodyText(source) {
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1]
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ' ');
  decoder.innerHTML = body;
  return decoder.value.replace(/\s+/g, ' ').trim();
}
for (const [file, expected] of Object.entries(baseline)) {
  const source = fs.readFileSync(path.join(output, file), 'utf8');
  assert.equal(hash(metaTags(source)), expected.head, `${file}: Korean metadata changed`);
  if(file === 'age.html' && hash(bodyText(source)) !== expected.body) {
    const { execFileSync } = require('node:child_process');
    assert.equal(execFileSync('git', ['diff', '0a091686ddd6bc2a4470711b120fee5db647a4c8', '--', 'app/(korean)/age'], {encoding:'utf8'}), '', 'Date-dependent Korean age source changed');
  } else assert.equal(hash(bodyText(source)), expected.body, `${file}: Korean content changed`);
  assert(source.includes('<html lang="ko"'), `${file}: Korean document language changed`);
}
const sitemap = fs.readFileSync(path.join(output, 'sitemap.xml.body'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.equal(urls.length, 304); assert.equal(new Set(urls).size, 304);
let international = 0;
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const locale = pathname.split('/')[1];
  if (!['en', 'ja', 'zh-hans', 'es', 'pt-br', 'id', 'hi', 'fr', 'ar', 'bn', 'ur', 'vi'].includes(locale)) continue;
  international++;
  const source = fs.readFileSync(path.join(output, pathname.slice(1) + '.html'), 'utf8');
  const doc = new JSDOM(source).window.document;
  const tag = locale === 'zh-hans' ? 'zh-Hans' : locale === 'pt-br' ? 'pt-BR' : locale;
  assert.equal(doc.documentElement.dir, ["ar","ur"].includes(locale) ? "rtl" : "ltr");
  assert.equal(doc.documentElement.lang, tag, `${pathname}: language`);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, url, `${pathname}: canonical`);
  assert.equal(doc.querySelector('meta[name="twitter:title"]').content, doc.title);
  assert.equal(doc.querySelector('meta[name="twitter:description"]').content,
    doc.querySelector('meta[name="description"]').content);
  assert(!doc.title.includes('몇이지'), `${pathname}: inherited Korean title`);
  assert(!doc.querySelector('meta[name="robots"]').content.includes('noindex'));
  assert.equal(doc.querySelector('meta[property="og:locale"]').content,
    ({en:'en_US',ja:'ja_JP','zh-hans':'zh_CN',es:'es_ES','pt-br':'pt_BR',id:'id_ID',hi:'hi_IN',fr:'fr_FR',ar:'ar_EG',bn:'bn_BD',ur:'ur_PK',vi:'vi_VN'})[locale]);
  doc.defaultView.close();
}
assert.equal(international, 258);
assert(!sitemap.includes('localhost'));
const notFound = fs.readFileSync(path.join(output, '_not-found.html'), 'utf8');
assert(/name="robots" content="noindex/.test(notFound));
console.log(JSON.stringify({ status: 'PASS', koreanPagesPreserved: 46,
  internationalPages: international, sitemapUrls: urls.length, global404Noindex: true }));
