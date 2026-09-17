import type { Dictionary } from './types';

export const pt: Dictionary = {
  meta: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    title: 'Endryus Schmidel',
    description:
      'Desenvolvedor full-stack no Rio de Janeiro. Java, Spring Boot e React, com foco em segurança de aplicações, multi-tenancy e controle de acesso.',
    ogImageAlt: 'Endryus Schmidel, desenvolvedor full-stack. Java, Spring Boot e React.',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    mainNav: 'Navegação principal',
    languageSwitcher: 'Idioma',
    switchTo: 'Ver em português',
    opensInNewTab: 'abre em nova aba',
    socialLinks: 'Perfis e contato',
  },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    stack: 'Stack',
    education: 'Formação',
    contact: 'Contato',
  },
  person: {
    jobTitle: 'Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor full-stack no Rio de Janeiro. Java, Spring Boot e React, com foco em segurança de aplicações.',
  },
  hero: {
    photoAlt: 'Foto de Endryus Schmidel',
    subtitle: 'Desenvolvedor full-stack. Java, Spring Boot e React.',
    lead: 'Construo sistemas onde segurança e controle de acesso não são adendo, são arquitetura.',
    location: 'Rio de Janeiro',
  },
  about: {
    eyebrow: 'Perfil',
    title: 'Sobre',
    paragraphs: [
      'Desenvolvedor full-stack, atualmente responsável pelo desenvolvimento e manutenção de uma plataforma de telemedicina em produção na Plugpix, onde também oriento a equipe de desenvolvimento e suporte.',
      'Em paralelo, sou cofundador da Verbinden, onde desenvolvo com outro engenheiro um SaaS multi-tenant para gestão de clínicas e salões, atualmente em fase final antes do lançamento.',
      'Meu interesse técnico está concentrado em segurança de aplicações. Na prática isso significa que construo pensando em isolamento de dados entre tenants, controle de acesso por função e auditoria de alterações, e que testo meus próprios sistemas procurando falhas de autorização como IDOR e BOLA. Estudo segurança ofensiva há cerca de um ano e pretendo migrar para a área profissionalmente.',
    ],
  },
  experience: {
    eyebrow: 'Trajetória',
    title: 'Experiência',
    currentLabel: 'atual',
    items: [
      {
        role: 'Desenvolvedor',
        company: 'Plugpix',
        period: 'Desde meados de 2026',
        location: 'Rio de Janeiro',
        current: true,
        description:
          'Responsável pelo desenvolvimento e evolução de uma plataforma de telemedicina em produção. Correção de falhas, implementação de novas funcionalidades e distribuição de demandas para a equipe de suporte e a equipe de desenvolvimento.',
        highlights: [],
        tags: ['TypeScript', 'React', 'PostgreSQL'],
      },
      {
        role: 'Cofundador e Desenvolvedor',
        company: 'Verbinden',
        period: '2026',
        location: 'Remoto',
        current: false,
        description:
          'SaaS multi-tenant para gestão de clínicas e salões de beleza, desenvolvido em dupla com um engenheiro sênior. Responsável pelo frontend e pela camada de segurança da aplicação.',
        highlights: [
          'Isolamento lógico de dados entre tenants no PostgreSQL',
          'Autenticação e autorização com Spring Security e JWT',
          'Mitigação de falhas de autorização (IDOR, BOLA) nas APIs REST',
        ],
        tags: ['Java 24', 'Spring Boot 3.4', 'React 18', 'TypeScript', 'Tailwind'],
      },
    ],
  },
  projects: {
    eyebrow: 'Portfólio',
    title: 'Projetos',
    items: [
      {
        title: 'Verbi Beauty',
        subtitle: 'Verbinden',
        description:
          'Plataforma de gestão, controle financeiro e redução de no-show para salões, barbearias e clínicas de estética. Em fase final de desenvolvimento. Código privado.',
        imageAlt:
          'Painel do Verbi Beauty mostrando a agenda do dia, faturamento e os próximos agendamentos',
        tags: [],
        links: [{ label: 'beauty.verbinden.com.br', href: 'https://beauty.verbinden.com.br' }],
      },
      {
        title: 'Hospital Management System',
        description:
          'Sistema de gestão de patrimônio hospitalar com auditoria completa de alterações via Hibernate Envers, autenticação stateless com JWT e controle de acesso por função (RBAC). Projeto individual.',
        imageAlt:
          'Tela de login do Hospital Management System, com acesso restrito e um modo de visitante para recrutadores',
        tags: ['Java 21', 'Spring Boot 3', 'React', 'PostgreSQL'],
        links: [
          {
            label: 'Código no GitHub',
            href: 'https://github.com/EndryusSchmidel/hospital-management-system',
          },
          {
            label: 'Demo online',
            href: 'https://hospital-management-system-gilt-kappa.vercel.app/',
          },
        ],
      },
    ],
  },
  stack: {
    eyebrow: 'Tecnologias',
    title: 'Stack',
    groups: [
      {
        title: 'Uso em produção',
        items: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Aprimorando',
        items: ['Segurança ofensiva web', 'Burp Suite', 'Nmap', 'Python para automação'],
      },
    ],
  },
  education: {
    eyebrow: 'Acadêmico',
    title: 'Formação',
    degree: {
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Uninter',
      period: '2025–2027',
      status: 'em andamento',
    },
    certificationsTitle: 'Certificações',
    certifications: [
      'Google Cybersecurity Professional Certificate (em andamento)',
      'Google Data Analytics — módulos de fundamentos concluídos',
      'The Complete Full-Stack Web Development — Udemy',
      'EF SET — Inglês B2',
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar',
    lead: 'A forma mais rápida de falar comigo é pelo WhatsApp.',
    emailLabel: 'E-mail',
    whatsappMessage: 'Olá, Endryus! Vi seu site e gostaria de conversar.',
    quickMessage: 'Oi, podemos conversar?',
  },
  footer: {
    text: 'Endryus Schmidel',
  },
};
