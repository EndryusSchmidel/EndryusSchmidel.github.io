/** Dados que não mudam entre idiomas. */
export const profile = {
  name: 'Endryus Schmidel',
  email: 'endryus.dev@gmail.com',
  github: 'https://github.com/EndryusSchmidel',
  linkedin: 'https://www.linkedin.com/in/endryus-schmidel/',
  instagram: 'https://www.instagram.com/endryus_schmidel/',
  /** Número no formato internacional, só dígitos (usado no link wa.me) */
  whatsapp: '5521965942391',
  knowsAbout: [
    'Java',
    'Spring Boot',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Application Security',
  ],
  alumniOf: { name: 'Uninter' },
} as const;
