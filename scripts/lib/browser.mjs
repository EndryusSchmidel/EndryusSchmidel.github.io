// Renderiza HTML em PNG com Chrome/Edge headless (defina CHROME_PATH se necessário).
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
const tmp = mkdtempSync(join(tmpdir(), 'shot-'));
const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

/** URL file:// de um arquivo do projeto, para usar em @font-face. */
export const fileUrl = (path) => pathToFileURL(resolve(path)).href;

export const fontFaces = `
  @font-face { font-family: Inter; src: url("${fileUrl('src/assets/fonts/inter-latin-wght-normal.woff2')}") format("woff2"); font-weight: 100 900; }
  @font-face { font-family: "Bebas Neue"; src: url("${fileUrl('src/assets/fonts/bebas-neue-latin-400-normal.woff2')}") format("woff2"); }
`;

export const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export function screenshot(html, out, width, height, attempts = 5) {
  if (!browser) throw new Error('Nenhum Chrome/Edge encontrado. Defina CHROME_PATH.');
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const file = join(tmp, `${id}.html`);
  const target = resolve(out);
  writeFileSync(file, html);

  for (let i = 0; i < attempts; i++) {
    rmSync(target, { force: true });
    try {
      execFileSync(browser, [
        '--headless=new',
        '--disable-gpu',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        `--window-size=${width},${height}`,
        '--virtual-time-budget=2000',
        // Perfil único por captura: reutilizar o mesmo diretório faz o Chromium repassar
        // a chamada a um processo que ainda está encerrando, que sai sem gravar o arquivo.
        `--user-data-dir=${join(tmp, `profile-${id}-${i}`)}`,
        `--screenshot=${target}`,
        pathToFileURL(file).href,
      ], { stdio: 'ignore' });
    } catch {
      // tenta de novo
    }
    // No Windows o msedge.exe pode retornar antes de o processo filho gravar o PNG.
    for (let waited = 0; waited < 15000; waited += 250) {
      if (existsSync(target) && statSync(target).size > 0) {
        sleep(300); // garante que a escrita terminou
        return;
      }
      sleep(250);
    }
  }
  throw new Error(`Falha ao gerar ${out} após ${attempts} tentativas.`);
}
