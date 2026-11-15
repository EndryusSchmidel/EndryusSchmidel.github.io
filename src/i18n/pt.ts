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
    projects: 'Trabalhos',
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
      'Desenvolvo o Verbi Beauty em dupla com o meu sócio, no backend e no frontend. Os pagamentos com a Asaas (Pix, cartão, split e estorno) e o isolamento de dados entre salões são meus de ponta a ponta. Também conduzo os projetos da agência, da proposta à publicação.',
      'Segurança de aplicações é a área técnica com que mais me identifico. Na prática, construo pensando em isolamento de dados entre tenants, controle de acesso por função e auditoria de alterações, e testo meus próprios sistemas procurando falhas de autorização como IDOR e BOLA.',
      'Em paralelo, sou desenvolvedor backend e responsável técnico na Plugpix, onde respondo sozinho por uma plataforma de telemedicina em produção, do código ao servidor.',
      'Estou aberto a vagas de desenvolvedor backend ou full-stack e de segurança de aplicações, com início imediato.',
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
          'Desenvolvimento do Verbi Beauty, SaaS multi-tenant de gestão para salões, barbearias, esmalterias e estúdios, em dupla com o meu sócio, no backend e no frontend. Pagamentos e segurança da aplicação ficam sob minha responsabilidade. Também conduzo os projetos da Agência Verbinden.',
        highlights: [
          'Multi-tenant com um schema PostgreSQL por salão (isolamento físico)',
          'Pagamentos com a Asaas: Pix confirmado por webhook, split, estorno e cartão com renovação',
          'Transactional Outbox com workers agendados e ShedLock, sem broker de mensagens',
          'Correção de falhas de autorização (IDOR, BOLA) e varredura automática de isolamento a partir do contrato OpenAPI',
          'Mais de 3 mil testes no backend (JUnit 5, Mockito, Testcontainers)',
        ],
        tags: ['Java 24', 'Spring Boot 3.4', 'PostgreSQL 16', 'React 19', 'TypeScript', 'Tailwind'],
      },
      {
        role: 'Desenvolvedor Backend e Responsável Técnico',
        company: 'Plugpix',
        period: 'Desde junho de 2026',
        location: 'Remoto',
        current: true,
        description:
          'Único desenvolvedor e responsável técnico de uma plataforma SaaS de telemedicina white-label em produção, com 46 revendedores e parceiros B2B integrados por API: backend, frontend, servidor e banco de dados. Foram 63 entregas em produção em cerca de quatro meses.',
        highlights: [
          'API de parceiros B2B com isolamento de dados entre parceiros',
          'Baixa automática de pagamentos integrada à Asaas',
          'Segurança da aplicação: correção de escalada de privilégio no cadastro, de vazamento de dados entre usuários e de acesso indevido entre parceiros na API',
          'Deploys sem downtime e migrations de PostgreSQL em produção',
        ],
        tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'React'],
      },
    ],
  },
  projects: {
    eyebrow: 'Verbinden',
    title: 'Trabalhos',
    items: [
      {
        title: 'Verbi Beauty',
        subtitle: 'Sistema de gestão (SaaS)',
        description:
          'Sistema de gestão para salões, barbearias, esmalterias e estúdios que reduz faltas e acaba com a planilha de comissões: o horário só é confirmado com o sinal pago por Pix, e a comissão de cada profissional sai calculada, já descontando o custo de material. Em fase final antes do lançamento. Código privado.',
        imageAlt:
          'Página do Verbi Beauty com o título "Menos faltas, comissões sem planilha e a agenda em ordem" e a tela da agenda da equipe',
        tags: [
          'Agendamento online com sinal por Pix',
          'Comissões automáticas',
          'Agenda da equipe',
          'Lembretes no WhatsApp',
          'Multi-tenant e seguro',
        ],
        links: [
          { label: 'beauty.verbinden.com.br', href: 'https://beauty.verbinden.com.br' },
          { label: 'verbinden.com.br', href: 'https://verbinden.com.br' },
        ],
      },
      {
        title: 'Site do Dr. Victor Camillo',
        subtitle: 'Agência Verbinden',
        description:
          'Site feito para transformar quem encontra um endocrinologista do Rio de Janeiro no Google ou no Instagram em consulta marcada: explica o que ele trata e como é a consulta, e leva o paciente direto ao WhatsApp com a mensagem pronta para agendar. Em fase de publicação.',
        imageAlt:
          'Página inicial do site do Dr. Victor Camillo, com o título "Equilíbrio hormonal, saúde em cada fase" e a foto do médico',
        tags: [
          'SEO para aparecer no Google',
          'Consultório no Google Maps',
          'Carregamento rápido no celular e no PC',
          'Português e inglês',
          'Cliques no WhatsApp medidos',
        ],
        links: [{ label: 'verbinden.com.br/agencia', href: 'https://verbinden.com.br/agencia' }],
      },
    ],
  },
  stack: {
    eyebrow: 'Tecnologias',
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
        title: 'Entrega e qualidade',
        items: ['Docker', 'GitHub Actions', 'Sentry', 'Cloudflare'],
      },
      {
        title: 'Testes',
        items: ['JUnit 5', 'Mockito', 'Testcontainers', 'Vitest', 'Playwright'],
      },
      {
        title: 'Segurança na prática',
        items: ['JWT + RBAC', 'Isolamento multi-tenant', 'Rate limiting', 'OWASP Top 10'],
      },
      {
        title: 'Aprimorando',
        items: [
          'Segurança ofensiva web',
          'PortSwigger Web Security Academy',
          'Burp Suite',
          'Nmap',
          'Python para automação',
        ],
        secondary: true,
      },
    ],
  },
  education: {
    eyebrow: 'Acadêmico',
    title: 'Formação',
    degree: {
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Uninter',
      period: '2025 · conclusão prevista em 2027',
    },
    certificationsTitle: 'Certificações',
    inProgressLabel: 'em andamento',
    certifications: [
      {
        name: 'Foundations of Cybersecurity',
        issuer: 'Google',
        year: '2026',
        href: 'https://www.coursera.org/account/accomplishments/records/L4TI3XAMJ0L0',
      },
      {
        name: 'GenAI & Dados',
        issuer: 'Bradesco / DIO',
        year: '2026',
        href: 'https://hermes.dio.me/certificates/YVXCWGE4.pdf',
      },
      {
        name: 'Inglês B2 (60/100)',
        issuer: 'EF SET',
        year: '2026',
        href: 'https://cert.efset.org/en/GDo7As',
      },
      { name: 'The Complete Full-Stack Web Development', issuer: 'Udemy' },
      { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google', inProgress: true },
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar',
    lead: 'Estou aberto a vagas de desenvolvedor backend ou full-stack (Java/Spring, Node.js, React) e de segurança de aplicações, remoto ou presencial no RJ, ES e SC, com início imediato. Me chame no WhatsApp ou por e-mail: respondo pessoalmente. Se você precisa de um site ou quer conhecer o Verbi Beauty, o canal é o mesmo.',
    ctaLabel: 'Falar no WhatsApp',
    emailLabel: 'E-mail',
    whatsappMessage: 'Olá, Endryus! Vim pelo seu portfólio e gostaria de conversar sobre ',
    quickMessage: 'Oi, podemos conversar?',
  },
  footer: {
    text: 'Endryus Schmidel',
  },
};
