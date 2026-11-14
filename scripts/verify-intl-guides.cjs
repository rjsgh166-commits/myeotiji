/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node CommonJS regression runner. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const ts = require('typescript');
const { JSDOM } = require('jsdom');
require.extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText, file);
const { INTERNATIONAL_GUIDES, guidePath } = require('../app/_lib/intl-guides/index.ts');
const root = path.resolve(__dirname, '../.next/server/app');
const site = 'https://myeotiji.kr';
const xml = fs.readFileSync(path.join(root, 'sitemap.xml.body'), 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const known = new Set(urls);
const pages = new Map();
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const file = path.join(root, pathname === '/' ? 'index.html' : pathname.slice(1) + '.html');
  const source = fs.readFileSync(file, 'utf8');
  const doc = new JSDOM(source).window.document;
  const links = [...doc.querySelectorAll('a[href]')].map(a => new URL(a.getAttribute('href'), url).href);
  const alternatives = [...doc.querySelectorAll('link[hreflang]')].map(a => ({ tag: a.hreflang, url: a.href }));
  const data = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => {
    const json = JSON.parse(script.textContent);
    assert.equal(json['@context'], 'https://schema.org');
    return json['@graph'] ?? [json];
  });
  const text = doc.querySelector('article')?.textContent ?? '';
  const tableCells = [...doc.querySelectorAll('td')].map(cell => cell.textContent);
  const tableHeaders = [...doc.querySelectorAll('tbody th')].map(cell => cell.textContent);
  pages.set(url, { source, links, alternatives, data, text, tableCells, tableHeaders });
  if (/^\/(en|ja|zh-hans|es|pt-br|id|hi|fr|ar|bn|ur|vi)(\/|$)/.test(pathname)) {
    assert.equal(doc.querySelectorAll('h1').length, 1, `${pathname}: one main heading`);
    assert(!doc.head.innerHTML.includes('localhost'), `${pathname}: local metadata leaked`);
    for (const node of data) {
      assert(!['FAQPage', 'AggregateRating', 'Review'].includes(node['@type']), 'Do not promise unearned rich-result eligibility');
      if (node['@type'] === 'BreadcrumbList') node.itemListElement.forEach((item, index) => {
        assert.equal(item.position, index + 1);
        assert(known.has(item.item), `Unknown breadcrumb URL ${item.item}`);
      });
    }
    for (const table of doc.querySelectorAll('table')) {
      const columns = table.querySelectorAll('thead th').length;
      for (const row of table.querySelectorAll('tbody tr')) assert.equal(row.children.length, columns, `${pathname}: table alignment`);
    }
  }
  doc.defaultView.close();
}
assert.equal(INTERNATIONAL_GUIDES.length, 93);
for (const locale of ['en', 'ja', 'zh-hans', 'es', 'pt-br', 'id', 'hi', 'fr', 'ar', 'bn', 'ur', 'vi']) {
  const guides = INTERNATIONAL_GUIDES.filter(g => g.locale === locale);
  assert.equal(guides.length, ['en', 'ja', 'zh-hans'].includes(locale) ? 10 : 7);
  assert.equal(guides.filter(g => g.kind === 'country').length, ['en', 'ja', 'zh-hans'].includes(locale) ? 3 : 0);
  assert.equal(new Set(guides.map(g => g.title)).size, ['en', 'ja', 'zh-hans'].includes(locale) ? 10 : 7);
  assert.equal(new Set(guides.map(g => g.description)).size, ['en', 'ja', 'zh-hans'].includes(locale) ? 10 : 7);
  const index = pages.get(`${site}/${locale}/guides`);
  assert.equal(index.data.find(x => x['@type'] === 'CollectionPage').mainEntity.itemListElement.length, guides.length);
  for (const guide of guides) {
    assert(guide.sections.length >= 3 && guide.faqs.length >= 2);
    assert(guide.sections.some(section => section.table), 'A worked example table is required');
    const url = site + guidePath(guide), page = pages.get(url), calculator = pages.get(site + guide.calculatorPath);
    assert(page.links.includes(site + guide.calculatorPath), `${url}: link to calculator`);
    assert(calculator.links.includes(url), `${url}: link back from calculator`);
    assert(index.links.includes(url), `${url}: listed in guide hub`);
    assert(page.links.includes(`${site}/${locale}/guides/editorial-policy`));
    const article = page.data.find(item => item['@type'] === 'Article');
    assert.equal(article.headline, guide.title);
    assert.equal(article.mainEntityOfPage, url);
    assert.equal(article.author['@type'], 'Organization');
    assert.equal(article.dateModified, guide.updated);
    assert.equal(article.datePublished, guide.published);
    for (const section of guide.sections) {
      assert(page.text.includes(section.heading));
      for (const paragraph of section.paragraphs) assert(page.text.includes(paragraph), `${url}: missing server-rendered text`);
    }
    for (const faq of guide.faqs) assert(page.text.includes(faq.answer), `${url}: FAQ answer must exist in HTML`);
    if (guide.kind === 'global') {
      assert.equal(page.alternatives.length, 13);
      for (const alt of page.alternatives) {
        assert(known.has(alt.url), `Unknown language alternate ${alt.url}`);
        const reciprocal = pages.get(alt.url);
        assert(reciprocal.alternatives.some(item => item.url === url), `Nonreciprocal hreflang ${url}`);
      }
    } else {
      assert.equal(page.alternatives.length, 1);
      assert.equal(page.alternatives[0].url, url);
      assert.equal(page.alternatives[0].tag, { en: 'en-US', ja: 'ja-JP', 'zh-hans': 'zh-Hans-CN' }[locale]);
      assert(guide.sources.length > 0, 'Country-specific rules need primary sources');
    }
    for (const source of guide.sources) {
      assert.equal(new URL(source.url).protocol, 'https:');
      assert(page.links.includes(source.url));
    }
    assert(calculator.data.some(item => item['@type'] === 'WebApplication'));
  }
}
// Verify discovery by walking rendered links, not by trusting sitemap inclusion alone.
const reached = new Set(), queue = ['en', 'ja', 'zh-hans', 'es', 'pt-br', 'id', 'hi', 'fr', 'ar', 'bn', 'ur', 'vi'].map(locale => `${site}/${locale}`);
while (queue.length) {
  const url = queue.shift();
  if (reached.has(url)) continue;
  reached.add(url);
  for (const link of pages.get(url)?.links ?? []) {
    const u = new URL(link);
    if (u.origin !== site || !/^\/(en|ja|zh-hans|es|pt-br|id|hi|fr|ar|bn|ur|vi)(\/|$)/.test(u.pathname)) continue;
    u.hash = ''; u.search = '';
    assert(known.has(u.href), `Broken internal international link ${link}`);
    if (!reached.has(u.href)) queue.push(u.href);
  }
}
assert.equal(reached.size, 258, 'Every international URL must be discoverable from a language home');
for (const locale of ['es', 'pt-br', 'id', 'hi']) {
 const compound = pages.get(`${site}/${locale}/guides/compound-interest`);
 assert(compound.tableCells.some(cell => cell.includes(locale === 'hi' ? '2,277.26' : '2.277,26')), `${locale}: translated compound numeric example`);
}
// Numeric worked examples were calculated independently and compared with the calculator regression suite.
const enCompound = pages.get(`${site}/en/guides/compound-interest`);
assert(enCompound.tableCells.includes('$2,277.26'));
assert(pages.get(`${site}/ja/guides/compound-interest`).tableCells.includes('約227,726円'));
assert(pages.get(`${site}/zh-hans/guides/compound-interest`).tableCells.includes('2,277.26元'));
assert(pages.get(`${site}/en/guides/us-take-home-pay-2026`).tableCells.includes('$57,990'));
assert(pages.get(`${site}/ja/guides/furusato-tax-limit`).tableCells.includes('約39,599円'));
assert(pages.get(`${site}/zh-hans/guides/cumulative-income-tax`).tableCells.includes('630元'));
assert(pages.get(`${site}/zh-hans/guides/2027-holiday-leave-planning`).tableCells.includes('连续18天'));
// Ensure long-form guide copy does not become a client-side JavaScript data dependency.
const representative = INTERNATIONAL_GUIDES.find(g => g.locale === 'en' && g.tool === 'fee').sections[0].paragraphs[0];
function scan(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? scan(path.join(dir, entry.name)) : [path.join(dir, entry.name)]); }
for (const file of scan(path.resolve(__dirname, '../.next/static/chunks')).filter(f => f.endsWith('.js'))) {
  assert(!fs.readFileSync(file, 'utf8').includes(representative), 'Long guide copy leaked into a client bundle');
}
console.log(JSON.stringify({ status: 'PASS', guides: 93, languageHubs: 12, policies: 12,
  calculatorRoundTrips: 93, discoverableInternationalUrls: reached.size,
  structuredData: 'Article / BreadcrumbList / CollectionPage / WebApplication', numericExamples: 7 }));
