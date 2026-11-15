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
      "I build Verbi Beauty together with my business partner, on both backend and frontend. The Asaas payment flows (Pix, card, split and refunds) and the data isolation between salons are mine end to end. I also run the agency's projects, from proposal to launch.",
      "Application security is the technical area I identify with the most. In practice, that means I design for tenant data isolation, role-based access control and change auditing, and I test my own systems for authorization flaws such as IDOR and BOLA.",
      'In parallel, I work as backend developer and tech lead at Plugpix, where I am the sole owner of a telemedicine platform in production, from code to server.',
      "I'm open to backend or full-stack developer roles and application security roles, available immediately.",
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
          'Building Verbi Beauty, a multi-tenant SaaS for managing salons, barbershops, nail studios and beauty studios, as a two-person team with my business partner, on both backend and frontend. Payments and application security are my responsibility. I also run Agência Verbinden projects.',
        highlights: [
          'Multi-tenant with one PostgreSQL schema per salon (physical isolation)',
          'Payments with Asaas: Pix confirmed by webhook, split, refunds and recurring card billing',
          'Transactional Outbox with scheduled workers and ShedLock, no message broker',
          'Fixed authorization flaws (IDOR, BOLA) and built an automated isolation scan driven by the OpenAPI contract',
          'Over 3,000 backend tests (JUnit 5, Mockito, Testcontainers)',
        ],
        tags: ['Java 24', 'Spring Boot 3.4', 'PostgreSQL 16', 'React 19', 'TypeScript', 'Tailwind'],
      },
      {
        role: 'Backend Developer & Tech Lead',
        company: 'Plugpix',
        period: 'Since June 2026',
        location: 'Remote',
        current: true,
        description:
          'Sole developer and technical owner of a white-label telemedicine SaaS platform in production, with 46 resellers and B2B partners integrated through an API: backend, frontend, server and database. 63 production releases in about four months.',
        highlights: [
          'B2B partner API with data isolation between partners',
          'Automatic payment reconciliation integrated with Asaas',
          'Application security: fixed privilege escalation at sign-up, data leakage between users and cross-partner access in the API',
          'Zero-downtime deploys and PostgreSQL migrations in production',
        ],
        tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'React'],
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
        items: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'JPA/Hibernate',
          'Flyway',
          'PostgreSQL',
          'Node.js',
          'Prisma',
        ],
      },
      {
        title: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind', 'TanStack Query', 'Next.js'],
      },
      {
        title: 'Delivery & quality',
        items: ['Docker', 'GitHub Actions', 'Sentry', 'Cloudflare'],
      },
      {
        title: 'Testing',
        items: ['JUnit 5', 'Mockito', 'Testcontainers', 'Vitest', 'Playwright'],
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
    lead: "I'm open to backend or full-stack developer roles (Java/Spring, Node.js, React) and application security roles, remote or on-site in Brazil (RJ, ES, SC), available immediately. Message me on WhatsApp or by email: I reply personally. If you need a website or want to see Verbi Beauty, it's the same channel.",
    ctaLabel: 'Message me on WhatsApp',
    emailLabel: 'Email',
    whatsappMessage: "Hi Endryus! I came from your portfolio and I'd like to talk about ",
    quickMessage: 'Hi, can we talk?',
  },
  footer: {
    text: 'Endryus Schmidel',
  },
};
