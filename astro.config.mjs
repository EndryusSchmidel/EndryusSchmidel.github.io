// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Este mesmo código é publicado em dois lugares (Vercel e GitHub Pages), cada um
// com seu próprio domínio — por isso o valor vem de uma env var, com a URL da
// Vercel como padrão. O workflow do GitHub Pages (.github/workflows/deploy-pages.yml)
// define SITE_URL para o domínio do Pages antes de buildar.
// É a única fonte do domínio: canonical, hreflang, OG, JSON-LD, robots.txt e sitemap
// derivam de Astro.site. Ao entrar um domínio definitivo próprio, troque o padrão
// aqui e ajuste a meta robots em src/components/Seo.astro.
const SITE = process.env.SITE_URL || 'https://mylanding-rose-five.vercel.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => /\/(pt|en)\/?$/.test(page),
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en' },
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Bebas Neue',
      cssVariable: '--font-bebas',
      display: 'swap',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/bebas-neue-latin-400-normal.woff2'],
            weight: 400,
            style: 'normal',
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
