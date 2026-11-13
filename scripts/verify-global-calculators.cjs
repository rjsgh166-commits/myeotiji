/* eslint-disable @typescript-eslint/no-require-imports -- Standalone Node CommonJS component regression runner. */
const fs = require('node:fs');
const assert = require('node:assert/strict');
const ts = require('typescript');
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<div id="root"></div>', { url: 'https://myeotiji.kr/en' });
Object.assign(global, { self: dom.window, window: dom.window, document: dom.window.document,
  HTMLElement: dom.window.HTMLElement, Element: dom.window.Element, Node: dom.window.Node,
  IS_REACT_ACT_ENVIRONMENT: true });
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });
require.extensions['.tsx'] = require.extensions['.ts'] = (module, file) => module._compile(
  ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020,
  } }).outputText, file,
);
const React = require('react'), { createRoot } = require('react-dom/client');
const { act } = React;
const Calculator = require('../app/_components/InternationalCalculator.tsx').default;
const { COPY, LOCALES, TOOLS } = require('../app/_lib/international.ts');
const { guideTeaserForCalculator } = require('../app/_lib/intl-guides/index.ts');
const root = createRoot(document.getElementById('root'));
let cases = 0;
const errors = [];
console.error = (...args) => errors.push(args.join(' '));
function field(label) {
  const parent = [...document.querySelectorAll('label')].find(item => item.querySelector('span')?.textContent === label);
  assert(parent, `Missing field ${label}`);
  return parent.querySelector('input,select');
}
async function fill(label, value) {
  const input = field(label);
  await act(async () => {
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(input, String(value));
    input.dispatchEvent(new window.Event('input', { bubbles: true }));
  });
}
function result(index) {
  const strong = document.querySelectorAll('section[aria-live] strong')[index];
  assert(strong, 'Expected numeric result');
  return Number(strong.textContent.replace(/[^\d.\-]/g, ''));
}
function near(index, expected, tolerance = .011) { assert(Math.abs(result(index) - expected) < tolerance, `${result(index)} != ${expected}`); }
(async () => {
  for (const locale of LOCALES) for (const tool of TOOLS) {
    const guide = guideTeaserForCalculator(locale, tool);
    await act(async () => root.render(React.createElement(Calculator, { locale, tool, guide, key: `${locale}-${tool}` })));
    const names = COPY[locale].tools[tool].fields;
    if (tool === 'fee') { near(0, 3.3); near(1, 96.7); }
    if (tool === 'discount') { near(0, 72); near(2, 28); }
    if (tool === 'days') {
      await fill(names[0], '2028-02-28'); await fill(names[1], '2028-03-01'); near(0, 2);
    }
    if (tool === 'stock-average') {
      await fill(names[1], 50); near(0, 45); near(1, 200); near(2, 9000);
    }
    if (tool === 'compound') {
      await fill(names[0], 1000); await fill(names[1], 100); await fill(names[2], 5); await fill(names[3], 1);
      near(0, 2277.26); near(1, 2200); near(2, 77.26);
    }
    if (tool === 'unit-converter') near(0, .1, .0000001);
    if (tool === 'age') {
      const date = new Date();
      const expected = date.getFullYear() - 2000;
      near(0, expected);
      await fill(names[0], '2099-01-01');
      assert(document.querySelector('[role="alert"]'), 'A future birth date must be invalid');
    }
    assert(document.querySelector(`a[href="${guide.href}"]`), 'The calculator must render its guide link');
    cases++;
  }
  await act(async () => root.unmount());
  assert.equal(errors.length, 0, errors.join('\n'));
  console.log(JSON.stringify({ status: 'PASS', localizedCalculatorCases: cases, dateHydration: 'local date / future input checked', compoundExample: 2277.26 }));
})().catch(error => { process.stderr.write(error.stack + '\n'); process.exitCode = 1; });
