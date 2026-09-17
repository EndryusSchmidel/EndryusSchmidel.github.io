import type { Dictionary } from './types';

// Tradução a partir de src/i18n/pt.ts. Ao mudar um texto em PT, atualize aqui também.

export const en: Dictionary = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Endryus Schmidel',
    description:
      'Full-stack developer based in Rio de Janeiro. Java, Spring Boot and React, focused on application security, multi-tenancy and access control.',
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
      'Full-stack developer based in Rio de Janeiro. Java, Spring Boot and React, with a focus on application security.',
  },
  hero: {
    photoAlt: 'Photo of Endryus Schmidel',
    subtitle: 'Full-stack developer. Java, Spring Boot and React.',
    lead: "I build systems where security and access control aren't an afterthought — they're architecture.",
    location: 'Rio de Janeiro',
  },
  about: {
    eyebrow: 'Profile',
    title: 'About',
    paragraphs: [
      "Full-stack developer, currently responsible for building and maintaining a telemedicine platform in production at Plugpix, where I also guide the development and support team.",
      "In parallel, I'm a co-founder of Verbinden, where I'm building a multi-tenant SaaS for managing clinics and salons alongside another engineer. It's currently in the final stretch before launch.",
      "My technical focus is application security. In practice, that means I design for tenant data isolation, role-based access control and change auditing, and I test my own systems for authorization flaws such as IDOR and BOLA. I've been studying offensive security for about a year and plan to move into the field professionally.",
    ],
  },
  experience: {
    eyebrow: 'Career',
    title: 'Experience',
    currentLabel: 'current',
    items: [
      {
        role: 'Developer',
        company: 'Plugpix',
        period: 'Since mid-2026',
        location: 'Rio de Janeiro',
        current: true,
        description:
          'Responsible for developing and evolving a telemedicine platform in production. Bug fixing, shipping new features and distributing work to the support and development teams.',
        highlights: [],
        tags: ['TypeScript', 'React', 'PostgreSQL'],
      },
      {
        role: 'Co-founder & Developer',
        company: 'Verbinden',
        period: '2026',
        location: 'Remote',
        current: false,
        description:
          'Multi-tenant SaaS for managing clinics and beauty salons, built as a two-person team with a senior engineer. Responsible for the frontend and the application security layer.',
        highlights: [
          'Logical tenant data isolation in PostgreSQL',
          'Authentication and authorization with Spring Security and JWT',
          'Mitigation of authorization flaws (IDOR, BOLA) across the REST APIs',
        ],
        tags: ['Java 24', 'Spring Boot 3.4', 'React 18', 'TypeScript', 'Tailwind'],
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
          'Management, financial control and no-show reduction platform for salons, barbershops and aesthetic clinics. In the final stage of development. Private source code.',
        imageAlt: "Verbi Beauty dashboard showing today's schedule, revenue and upcoming appointments",
        tags: [],
        links: [{ label: 'beauty.verbinden.com.br', href: 'https://beauty.verbinden.com.br' }],
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
