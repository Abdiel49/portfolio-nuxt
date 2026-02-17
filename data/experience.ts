import type { Experience } from '~/types';

export const experiences: Experience[] = [
  {
    id: 'freelance',
    role: 'Full Stack Software Developer',
    company: 'Freelance',
    period: 'Sep 2021 - Feb 2026',
    description: [
      "Delivered end-to-end full stack solutions, translating client requirements into production-ready mobile, web, and backend systems.",
      "Developed React Native applications with offline-first capabilities and Angular-based administrative dashboards.",
      "Built scalable backend services using Node.js, NestJS, and Express, exposing REST APIs and integrating SQL and NoSQL databases.",
      "Designed and implemented advanced CI/CD pipelines using GitHub Actions to automate testing, linting, secure database migrations, and deployments.",
      "Deployed containerized applications using Docker, managing infrastructure across AWS, GCP , Heroku, and Railway.",
      "Implemented automated backup pipelines for SQL and NoSQL databases to ensure data reliability and recovery.",
      "Built continuous integration workflows for frontend projects (React, Vue, Nuxt, Angular) to validate commits and enforce best practices.",
      "Integrated AI-assisted tools into pull request workflows to identify critical issues and generate automated technical reports.",
      "Successfully delivered and maintained multiple applications in production, including deployments to mobile app stores."
    ],
    techBadges: ['React Native', 'NestJS', 'GraphQL', 'AWS', 'Angular', 'PostgreSQL', 'Redis', 'GraphQL', 'Offline Modules', 'Docker', 'PouchDB', 'CouchDB', 'Firestore']
  },
  {
    id: 'tangram',
    role: 'Mobile Developer Lead',
    company: 'Tangram Consulting',
    period: 'Sep 2024 - Jan 2026',
    description: [
      "Developed and maintained cross-platform mobile applications using React Native (CLI and Expo) for iOS and Android.",
      "Provided technical leadership across multiple teams, unblocking developers, designing architectural solutions for new applications, and resolving high-priority production issues to ensure stability and timely delivery.",
      "Implemented complex UI flows, online payment systems, external API integrations, and third-party SDKs.",
      "Built and maintained CI/CD pipelines using GitHub Actions to enforce strict linting rules, automated testing, and continuous code validation for React Native and Expo projects.",
      "Automated mobile build and release processes using Expo EAS, enabling deployments to the Apple App Store and Google Play Store.",
      "Collaborated closely with UI/UX designers, backend engineers, clients, and stakeholders to align technical solutions with business requirements.",
      "Supported production applications, managed store updates, and optimized development workflows to accelerate delivery across multiple projects.",
    ],
    techBadges: ['React Native', 'Expo', 'iOS', 'Android', 'GCP', 'Automated Testing', 'TypeScript']
  },
  {
    id: 'racquets',
    role: 'Full Stack Software Engineer',
    company: 'Racquets AppSuite LLC',
    period: 'Jan 2024 - Dec 2025',
    description: [
      "Led the development and maintenance of a React Native mobile application, covering project planning, architecture definition, and core interface design.",
      "Implemented critical features including online payment systems and multi-language support for 11 languages.",
      "Built and maintained RESTful APIs using Node.js and Express, integrating Google Cloud Platform services such as Firestore, Authentication, Google Maps, and Analytics.",
      "Designed scalable application architecture to support production usage and future feature growth.",
      "Automated CI/CD pipelines using GitHub Actions to run tests, validate code quality, and deploy backend services to productionenvironments.",
    ],
    techBadges: ['React Native', 'NodeJS', 'Firestore', 'Localization', 'GCP', 'Online payments']
  },
  {
    id: 'tugerente',
    role: 'Full Stack Software Developer',
    company: 'tuGerente',
    period: 'Aug 2022 - Feb 2023',
    description: [
      "Led the mobile development team, overseeing end-to-end development and deployment of iOS and Android applications.",
      "Ensured quality and timely delivery by enforcing development standards and collaborating on backend architecture and strategy.",
      "Managed cloud services using GCP for authentication, analytics, and Firestore-based data persistence.",
      "Utilized AWS services (S3, EC2) for file storage and compute resources.",
      "Contributed technical insights to optimize development processes and improve team efficiency.",
    ],
    techBadges: ['Mobile Leadership', 'React Native', 'AWS', 'Project Strategy', 'Android', 'iOS', 'Offline Modules', 'Firestore', 'NodeJS', 'Docker', 'PostgreSQL', 'Redis', 'PouchDB', 'CouchDB']
  },
  {
    id: 'cannedhead',
    role: 'Front End Developer',
    company: 'Canned Head',
    period: 'Nov 2021 - Feb 2022',
    description: [
      "Specialized in React frontend development, translating UI/UX designs into responsive, pixel-perfect web applications.",
      "Collaborated closely with backend teams to integrate frontend components with REST APIs.",
      "Produced clear and maintainable code documentation to support long-term scalability and team collaboration.",
    ],
    techBadges: ['React', 'UI/UX', 'Responsive Design', 'API Integration', 'Documentation']
  }
];