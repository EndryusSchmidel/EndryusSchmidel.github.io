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
    projects: 'Work',
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
    eyebrow: 'Verbinden',
    title: 'Work',
    items: [
      {
        title: 'Verbi Beauty',
        subtitle: 'Management system (SaaS)',
        description:
          'Management system for salons, barbershops, nail studios and beauty studios that cuts no-shows and ends commission spreadsheets: a booking is only confirmed once the Pix deposit is paid, and each professional\'s commission is calculated automatically, net of material costs. In the final stretch before launch. Private source code.',
        imageAlt:
          'Verbi Beauty landing page with the headline "Fewer no-shows, commissions without spreadsheets and an organized schedule" and the team schedule screen',
        tags: [
          'Online booking with Pix deposit',
          'Automatic commissions',
          'Team schedule',
          'WhatsApp reminders',
          'Secure multi-tenant',
        ],
        links: [
          { label: 'beauty.verbinden.com.br', href: 'https://beauty.verbinden.com.br' },
          { label: 'verbinden.com.br', href: 'https://verbinden.com.br' },
        ],
      },
      {
        title: 'Dr. Victor Camillo website',
        subtitle: 'Agência Verbinden',
        description:
          'A website built to turn people who find an endocrinologist in Rio de Janeiro on Google or Instagram into booked appointments: it explains what he treats and how the appointment works, and takes the patient straight to WhatsApp with a ready-made message to book. About to be published.',
        imageAlt:
          'Home page of Dr. Victor Camillo\'s website, with the headline "Hormonal balance, health at every stage" and a photo of the doctor',
        tags: [
          'SEO to show up on Google',
          'Practice on Google Maps',
          'Fast on mobile and desktop',
          'Portuguese and English',
          'WhatsApp clicks tracked',
        ],
        links: [{ label: 'verbinden.com.br/agencia', href: 'https://verbinden.com.br/agencia' }],
      },
    ],
  },
  stack: {
    eyebrow: 'Technologies',
    title: 'Stack',
    groups: [
      {
        title: 'Backend',
        items: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Flyway', 'PostgreSQL'],
      },
      {
        title: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind', 'TanStack Query', 'Next.js'],
      },
      {
        title: 'Delivery & quality',
        items: ['Docker', 'GitHub Actions', 'Sentry', 'Cloudflare', 'Vitest', 'Playwright'],
      },
      {
        title: 'Security in practice',
        items: ['JWT + RBAC', 'Multi-tenant isolation', 'Rate limiting', 'OWASP Top 10'],
      },
      {
        title: 'Improving',
        items: [
          'Offensive web security',
          'PortSwigger Web Security Academy',
          'Burp Suite',
          'Nmap',
          'Python for automation',
        ],
        secondary: true,
      },
    ],
  },
  education: {
    eyebrow: 'Academic',
    title: 'Education',
    degree: {
      course: 'Associate Degree in Systems Analysis and Development',
      institution: 'Uninter',
      period: '2025 · expected graduation 2027',
    },
    certificationsTitle: 'Certifications',
    inProgressLabel: 'in progress',
    certifications: [
      {
        name: 'Foundations of Cybersecurity',
        issuer: 'Google',
        year: '2026',
        href: 'https://www.coursera.org/account/accomplishments/records/L4TI3XAMJ0L0',
      },
      {
        name: 'GenAI & Data',
        issuer: 'Bradesco / DIO',
        year: '2026',
        href: 'https://hermes.dio.me/certificates/YVXCWGE4.pdf',
      },
      {
        name: 'English B2 (60/100)',
        issuer: 'EF SET',
        year: '2026',
        href: 'https://cert.efset.org/en/GDo7As',
      },
      { name: 'The Complete Full-Stack Web Development', issuer: 'Udemy' },
      { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google', inProgress: true },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    lead: "Need a website, a management system, or want to see Verbi Beauty? Message me on WhatsApp: I reply personally and, if it makes sense, send a written proposal.",
    ctaLabel: 'Message me on WhatsApp',
    emailLabel: 'Email',
    whatsappMessage: "Hi Endryus! I came from your portfolio and I'd like to talk about ",
    quickMessage: 'Hi, can we talk?',
  },
  footer: {
    text: 'Endryus Schmidel',
  },
};
