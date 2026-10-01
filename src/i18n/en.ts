import type { Dictionary } from './types';

// Tradução a partir de src/i18n/pt.ts. Ao mudar um texto em PT, atualize aqui também.

export const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Endryus Schmidel — Full-Stack Developer',
    description:
      'Full-stack developer and co-founder of Verbinden Tecnologia, based in Rio de Janeiro. Java, Spring Boot and React, focused on application security, multi-tenancy and access control.',
    ogImageAlt: 'Endryus Schmidel, full-stack developer. Java, Spring Boot and React.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    languageSwitcher: 'Language',
    switchTo: 'View in English',
    opensInNewTab: 'opens in a new tab',
    socialLinks: 'Profiles and contact',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Stack',
    education: 'Education',
    contact: 'Contact',
  },
  person: {
    jobTitle: 'Full-Stack Developer',
    description:
      'Full-stack developer and co-founder of Verbinden Tecnologia, based in Rio de Janeiro. Java, Spring Boot and React, with a focus on application security.',
  },
  hero: {
    photoAlt: 'Photo of Endryus Schmidel',
    subtitle: 'Full-stack developer. Java, Spring Boot and React.',
    companyRole: 'Co-founder of',
    lead: "I build systems where security and access control aren't an afterthought — they're architecture.",
    location: 'Rio de Janeiro',
  },
  about: {
    eyebrow: 'Profile',
    title: 'About',
    paragraphs: [
      "I'm a co-founder of Verbinden Tecnologia, a Rio de Janeiro company behind Verbi Beauty, a management system for salons, barbershops, nail studios and beauty studios, and behind Agência Verbinden, which builds custom websites and runs ads for professionals and service businesses.",
      "I build Verbi Beauty together with my business partner, splitting backend and frontend between us. He leads the architecture decisions; I own the application security layer. I also run the agency's projects, from proposal to launch.",
      "Application security is the technical area I identify with the most. In practice, that means I design for tenant data isolation, role-based access control and change auditing, and I test my own systems for authorization flaws such as IDOR and BOLA.",
      'In parallel, I work as a developer at Plugpix, evolving a telemedicine platform in production.',
    ],
  },
  experience: {
    eyebrow: 'Career',
    title: 'Experience',
    currentLabel: 'current',
    items: [
      {
        role: 'Co-founder & Developer',
        company: 'Verbinden Tecnologia',
        period: 'Since March 2026',
        location: 'Rio de Janeiro',
        current: true,
        description:
          'Building Verbi Beauty, a multi-tenant SaaS for managing salons, barbershops, nail studios and beauty studios, as a two-person team with my business partner: backend and frontend split between us, with the application security layer under my responsibility. I also run Agência Verbinden projects.',
        highlights: [
          'Logical tenant data isolation in PostgreSQL',
          'Authentication and authorization with Spring Security and JWT',
          'Mitigation of authorization flaws (IDOR, BOLA) across the REST APIs',
        ],
        tags: ['Java 24', 'Spring Boot 3.4', 'React 18', 'TypeScript', 'Tailwind'],
      },
      {
        role: 'Mid-level Software Developer',
        company: 'Plugpix',
        period: 'Since June 2026',
        location: 'Remote',
        current: true,
        description:
          'Responsible for developing and evolving a telemedicine platform in production. Bug fixing, shipping new features and distributing work to the support and development teams.',
        highlights: [],
        tags: ['TypeScript', 'React', 'PostgreSQL'],
      },
    ],
  },
  projects: {
    eyebrow: 'Portfolio',
    title: 'Projects',
    items: [
      {
        title: 'Verbi Beauty',
        subtitle: 'Verbinden',
        description:
          'Management system for salons, barbershops, nail studios and beauty studios: team schedule, Pix deposits on online booking and rule-based commissions. In the final stretch before launch. Private source code.',
        imageAlt: "Verbi Beauty dashboard showing today's schedule, revenue and upcoming appointments",
        tags: [],
        links: [
          { label: 'beauty.verbinden.com.br', href: 'https://beauty.verbinden.com.br' },
          { label: 'verbinden.com.br', href: 'https://verbinden.com.br' },
        ],
      },
      {
        title: 'Hospital Management System',
        description:
          'Hospital asset management system with a full change audit trail via Hibernate Envers, stateless JWT authentication and role-based access control (RBAC). Solo project.',
        imageAlt:
          'Hospital Management System login screen, with restricted access and a visitor mode for recruiters',
        tags: ['Java 21', 'Spring Boot 3', 'React', 'PostgreSQL'],
        links: [
          {
            label: 'Source on GitHub',
            href: 'https://github.com/EndryusSchmidel/hospital-management-system',
          },
          {
            label: 'Live demo',
            href: 'https://hospital-management-system-gilt-kappa.vercel.app/',
          },
        ],
      },
    ],
  },
  stack: {
    eyebrow: 'Technologies',
    title: 'Stack',
    groups: [
      {
        title: 'Used in production',
        items: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Improving',
        items: ['Offensive web security', 'Burp Suite', 'Nmap', 'Python for automation'],
      },
    ],
  },
  education: {
    eyebrow: 'Academic',
    title: 'Education',
    degree: {
      course: 'Systems Analysis and Development',
      institution: 'Uninter',
      period: '2025–2027',
      status: 'in progress',
    },
    certificationsTitle: 'Certifications',
    certifications: [
      'Google Cybersecurity Professional Certificate (in progress)',
      'Google Data Analytics — foundational modules completed',
      'The Complete Full-Stack Web Development — Udemy',
      'EF SET — English B2',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    lead: 'The fastest way to reach me is on WhatsApp.',
    emailLabel: 'Email',
    whatsappMessage: "Hi Endryus! I saw your website and I'd like to talk.",
    quickMessage: 'Hi, can we talk?',
  },
  footer: {
    text: 'Endryus Schmidel',
  },
};
