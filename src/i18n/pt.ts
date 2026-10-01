import type { Dictionary } from './types';

export const pt: Dictionary = {
  meta: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    title: 'Endryus Schmidel — Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor full-stack e cofundador da Verbinden Tecnologia, no Rio de Janeiro. Java, Spring Boot e React, com foco em segurança de aplicações, multi-tenancy e controle de acesso.',
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
      'Desenvolvedor full-stack e cofundador da Verbinden Tecnologia, no Rio de Janeiro. Java, Spring Boot e React, com foco em segurança de aplicações.',
  },
  hero: {
    photoAlt: 'Foto de Endryus Schmidel',
    subtitle: 'Desenvolvedor full-stack. Java, Spring Boot e React.',
    companyRole: 'Cofundador da',
    lead: 'Construo sistemas onde segurança e controle de acesso não são adendo, são arquitetura.',
    location: 'Rio de Janeiro',
  },
  about: {
    eyebrow: 'Perfil',
    title: 'Sobre',
    paragraphs: [
      'Sou cofundador da Verbinden Tecnologia, empresa do Rio de Janeiro por trás do Verbi Beauty, sistema de gestão para salões, barbearias, esmalterias e estúdios, e da Agência Verbinden, que cria sites sob medida e cuida de anúncios para profissionais e empresas de serviços.',
      'Desenvolvo o Verbi Beauty em dupla com o meu sócio, dividindo backend e frontend. Ele conduz as decisões de arquitetura; eu respondo pela camada de segurança da aplicação. Também conduzo os projetos da agência, da proposta à publicação.',
      'Segurança de aplicações é a área técnica com que mais me identifico. Na prática, construo pensando em isolamento de dados entre tenants, controle de acesso por função e auditoria de alterações, e testo meus próprios sistemas procurando falhas de autorização como IDOR e BOLA.',
      'Em paralelo, atuo como desenvolvedor na Plugpix, onde cuido da evolução de uma plataforma de telemedicina em produção.',
    ],
  },
  experience: {
    eyebrow: 'Trajetória',
    title: 'Experiência',
    currentLabel: 'atual',
    items: [
      {
        role: 'Cofundador e Desenvolvedor',
        company: 'Verbinden Tecnologia',
        period: 'Desde março de 2026',
        location: 'Rio de Janeiro',
        current: true,
        description:
          'Desenvolvimento do Verbi Beauty, SaaS multi-tenant de gestão para salões, barbearias, esmalterias e estúdios, em dupla com o meu sócio: backend e frontend divididos entre nós, com a camada de segurança da aplicação sob minha responsabilidade. Também conduzo os projetos da Agência Verbinden.',
        highlights: [
          'Isolamento lógico de dados entre tenants no PostgreSQL',
          'Autenticação e autorização com Spring Security e JWT',
          'Mitigação de falhas de autorização (IDOR, BOLA) nas APIs REST',
        ],
        tags: ['Java 24', 'Spring Boot 3.4', 'React 18', 'TypeScript', 'Tailwind'],
      },
      {
        role: 'Desenvolvedor de Software Pleno',
        company: 'Plugpix',
        period: 'Desde junho de 2026',
        location: 'Remoto',
        current: true,
        description:
          'Responsável pelo desenvolvimento e evolução de uma plataforma de telemedicina em produção. Correção de falhas, implementação de novas funcionalidades e distribuição de demandas para a equipe de suporte e a equipe de desenvolvimento.',
        highlights: [],
        tags: ['TypeScript', 'React', 'PostgreSQL'],
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
          'Sistema de gestão para salões, barbearias, esmalterias e estúdios: agenda da equipe, sinal por Pix no agendamento online e comissões calculadas por regra. Em fase final antes do lançamento. Código privado.',
        imageAlt:
          'Painel do Verbi Beauty mostrando a agenda do dia, faturamento e os próximos agendamentos',
        tags: [],
        links: [
          { label: 'beauty.verbinden.com.br', href: 'https://beauty.verbinden.com.br' },
          { label: 'verbinden.com.br', href: 'https://verbinden.com.br' },
        ],
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
