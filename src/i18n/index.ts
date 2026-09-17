import { en } from './en';
import { pt } from './pt';
import { defaultLocale, locales, type Dictionary, type Locale } from './types';

export { defaultLocale, locales };
export type { Dictionary, Locale };

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
