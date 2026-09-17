// Gera public/og-pt.png e public/og-en.png (1200x630), monocromáticas.
// Uso: npm run og
import { en } from '../src/i18n/en.ts';
import { pt } from '../src/i18n/pt.ts';
import { escapeHtml, fontFaces, screenshot } from './lib/browser.mjs';

for (const [locale, t] of Object.entries({ pt, en })) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    ${fontFaces}
    * { margin: 0; box-sizing: border-box; }
    html, body { width: 1200px; height: 630px; overflow: hidden; }
    body { background: #0a0a0a; color: #fafafa; font-family: Inter, sans-serif;
      padding: 88px 96px; display: flex; flex-direction: column; justify-content: space-between; }
    .label { font-size: 20px; letter-spacing: 0.18em; text-transform: uppercase; color: #8a8a8a; }
    .dash { width: 40px; height: 1px; background: #525252; margin-top: 14px; }
    h1 { font-family: "Bebas Neue", sans-serif; font-weight: 400; font-size: 168px; line-height: 0.85;
      letter-spacing: -0.02em; text-transform: uppercase; margin-top: 40px; }
    p { font-size: 34px; font-weight: 300; color: #d4d4d4; margin-top: 24px; }
    .foot { display: flex; justify-content: space-between; font-size: 22px; color: #8a8a8a;
      border-top: 1px solid #262626; padding-top: 24px; }
  </style></head><body>
    <div>
      <div class="label">${escapeHtml(t.person.jobTitle)}</div><div class="dash"></div>
      <h1>Endryus Schmidel</h1>
      <p>${escapeHtml(t.hero.subtitle)}</p>
    </div>
    <div class="foot"><span>${escapeHtml(t.hero.location)}</span><span>github.com/EndryusSchmidel</span></div>
  </body></html>`;

  screenshot(html, `public/og-${locale}.png`, 1200, 630);
  console.log(`gerado public/og-${locale}.png`);
}
