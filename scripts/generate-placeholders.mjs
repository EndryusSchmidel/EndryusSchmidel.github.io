// Gera favicon.png e apple-touch-icon.png a partir de src/assets/favicon.png
// (o monograma "ES", em PNG transparente). Uso: node scripts/generate-placeholders.mjs
import sharp from 'sharp';

const BG = '#0a0a0a';
const source = sharp('src/assets/favicon.png');

// Favicon da aba: achatado no preto do site — transparente ficaria quase
// invisível em navegadores com tema claro.
await source.clone().resize(64, 64).flatten({ background: BG }).png().toFile('public/favicon.png');

// Apple touch icon: precisa de fundo opaco — iOS pinta áreas transparentes de
// preto puro por padrão, então achatamos explicitamente no preto do site.
await source
  .clone()
  .resize(180, 180)
  .flatten({ background: BG })
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('favicon.png e apple-touch-icon.png gerados');
