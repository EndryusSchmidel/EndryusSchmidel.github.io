// Gera o apple-touch-icon (public/apple-touch-icon.png).
// Uso: node scripts/generate-placeholders.mjs
// A foto do hero é src/assets/profile.png (enviada manualmente, não gerada).
import sharp from 'sharp';

const touch = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#0a0a0a"/>
  <path d="M62 46h56v13H77v15h36v13H77v16h41v13H62z" fill="#fafafa"/>
  <rect x="62" y="130" width="56" height="3" fill="#525252"/>
</svg>`;

await sharp(Buffer.from(touch)).png().toFile('public/apple-touch-icon.png');

console.log('apple-touch-icon gerado');
