import type { Experience } from '~/types';

export const experiences: Experience[] = [
  {
    id: 'tangram',
    role: 'Mobile Developer Lead',
    company: 'Tangram Consulting',
    period: 'Sep 2024 - Dec 2025',
    description: [
      'Designed and implemented app architecture and native solutions for iOS and Android across multiple projects.',
      'Integrated critical functionalities such as online payments and Google Cloud Platform (GCP) services, including Maps API and Analytics.',
      'Provided technical leadership by resolving complex issues and guiding the team to optimize workflows and accelerate development.',
      'Managed the full development lifecycle, ensuring quality through automated testing up to successful app store deployment.'
    ],
    techBadges: ['React Native', 'Expo', 'iOS', 'Android', 'GCP', 'Automated Testing', 'TypeScript']
  },
  {
    id: 'freelance',
    role: 'Full Stack Software Developer',
    company: 'Freelance',
    period: 'Sep 2021 - Sep 2024',
    description: [
      'Led end-to-end projects, translating requirements into React Native applications (with offline modules) and Angular dashboards.',
      'Developed scalable backends using NestJS/NodeJS with REST and GraphQL APIs, integrating payment gateways and Redis.',
      'Managed advanced cloud infrastructure using AWS (EC2, S3) and persistence services on GCP.',
      'Oversaw the successful deployment of applications to the official Apple and Google app stores.'
    ],
    techBadges: ['React Native', 'NestJS', 'GraphQL', 'AWS', 'Angular', 'PostgreSQL', 'Redis', 'GraphQL', 'Offline Modules', 'Docker', 'PouchDB', 'CouchDB', 'Firestore']
  },
  {
    id: 'racquets',
    role: 'Full Stack Software Engineer',
    company: 'Racquets AppSuite LLC',
    period: 'Jan 2024 - Aug 2025',
    description: [
      'Directed the development and maintenance of React Native applications, covering everything from project planning to core interface design.',
      'Implemented online payment systems and localization support for 11 languages.',
      'Built robust backends with NodeJS and Firestore, creating scalable architectures based on Google services.'
    ],
    techBadges: ['React Native', 'NodeJS', 'Firestore', 'Localization', 'GCP', 'Online payments']
  },
  {
    id: 'tugerente',
    role: 'Full Stack Software Developer',
    company: 'tuGerente',
    period: 'Aug 2022 - Feb 2023',
    description: [
      'Led the mobile team, overseeing the development and deployment of iOS and Android applications.',
      'Collaborated closely on backend design strategy and maintained development standards for timely delivery.',
      'Managed hybrid infrastructure using Amazon S3/EC2 for storage and compute, along with GCP Firestore.'
    ],
    techBadges: ['Mobile Leadership', 'React Native', 'AWS', 'Project Strategy', 'Android', 'iOS', 'Offline Modules', 'Firestore', 'NodeJS', 'Docker', 'PostgreSQL', 'Redis', 'PouchDB', 'CouchDB']
  },
  {
    id: 'cannedhead',
    role: 'Front End Developer',
    company: 'Canned Head',
    period: 'Nov 2021 - Feb 2022',
    description: [
      'Specialized in React frontend development, translating UI designs into pixel-perfect and responsive web apps.',
      'Seamlessly integrated interface components with backend APIs through cross-functional collaboration.',
      'Focused on clear technical documentation to improve long-term code maintainability and reference.'
    ],
    techBadges: ['React', 'UI/UX', 'Responsive Design', 'API Integration', 'Documentation']
  }
];