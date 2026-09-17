export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export interface ExternalLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  /** Descreve o screenshot do projeto (src/assets/projects), para leitores de tela */
  imageAlt: string;
  tags: string[];
  links: ExternalLink[];
}

export interface Dictionary {
  meta: {
    /** Valor para <html lang> e hreflang */
    htmlLang: string;
    /** Valor para og:locale */
    ogLocale: string;
    title: string;
    description: string;
    ogImageAlt: string;
  };
  a11y: {
    skipToContent: string;
    mainNav: string;
    languageSwitcher: string;
    switchTo: string;
    opensInNewTab: string;
    socialLinks: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    stack: string;
    education: string;
    contact: string;
  };
  person: {
    jobTitle: string;
    description: string;
  };
  hero: {
    photoAlt: string;
    subtitle: string;
    lead: string;
    location: string;
  };
  about: {
    /** Rótulo pequeno em caixa alta exibido acima do título */
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  experience: {
    /** Rótulo pequeno em caixa alta exibido acima do título */
    eyebrow: string;
    title: string;
    currentLabel: string;
    items: ExperienceItem[];
  };
  projects: {
    /** Rótulo pequeno em caixa alta exibido acima do título */
    eyebrow: string;
    title: string;
    items: ProjectItem[];
  };
  stack: {
    /** Rótulo pequeno em caixa alta exibido acima do título */
    eyebrow: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  education: {
    /** Rótulo pequeno em caixa alta exibido acima do título */
    eyebrow: string;
    title: string;
    degree: {
      course: string;
      institution: string;
      period: string;
      status: string;
    };
    certificationsTitle: string;
    certifications: string[];
  };
  contact: {
    /** Rótulo pequeno em caixa alta exibido acima do título */
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    /** Mensagem pré-preenchida no link do WhatsApp */
    whatsappMessage: string;
    /** Mensagem curta usada no botão de WhatsApp do menu mobile */
    quickMessage: string;
  };
  footer: {
    text: string;
  };
}
