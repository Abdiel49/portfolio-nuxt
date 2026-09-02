import type { Experience } from '~/types';

export const experiences: Experience[] = [
  {
    id: 'independent-consultant-current',
    role: 'Software Engineer & Tech Lead',
    company: 'Independent Consultant',
    period: 'Dec 2025 - Present',
    description: [
      "Leading a multidisciplinary team of 6 developers on a complex SaaS platform, owning architecture decisions, sprint planning, and technical delivery across all layers.",
      "Designing and implementing scalable backend services using NestJS with Hexagonal Architecture and DDD principles, ensuring long-term maintainability and performance.",
      "Building high-performance frontend solutions using React and Angular (SSR/CSR), with advanced state management and optimization strategies.",
      "Leveraging AI-native development workflows through Claude Code, Codex, and Gemini CLI with optimized token strategies, applying Spec-Driven Development (SDD) and AI security best practices.",
      "Developing high-performance web solutions using Nuxt (SSR/SSG), significantly improving data security and server efficiency through advanced cache management."
    ],
    techBadges: ['NestJS', 'React', 'Angular', 'Nuxt', 'Hexagonal Architecture', 'DDD', 'AI-Native Development', 'Team Leadership', 'SDD']
  },
  {
    id: 'tangram',
    role: 'React Native Engineer',
    company: 'Tangram Consulting',
    period: 'Sep 2024 - Jan 2026',
    description: [
      "Developed and maintained cross-platform mobile applications using React Native (CLI and Expo) for iOS and Android, serving 5,000+ active users per app across European markets.",
      "Automated mobile build and release processes using Expo EAS, reducing deployment time to app stores by 40% and local build times by 30% while eliminating version conflicts.",
      "Provided technical leadership and architectural solutions for new applications, unblocking developers and resolving high-priority production issues to ensure stability and timely delivery.",
      "Designed and implemented REST APIs with WebSocket support for real-time features, managing complex UI flows, payment system integrations, and native module bridging.",
      "Built and maintained CI/CD pipelines using GitHub Actions to enforce strict linting rules, automated testing, and continuous code validation for React Native and Expo projects."
    ],
    techBadges: ['React Native', 'Expo', 'EAS', 'iOS', 'Android', 'WebSocket', 'REST APIs', 'GitHub Actions', 'TypeScript']
  },
  {
    id: 'racquets',
    role: 'Full Stack Software Engineer',
    company: 'Racquets AppSuite LLC',
    period: 'Jan 2024 - Dec 2025',
    description: [
      "Led the technical definition and development of a cross-platform mobile platform supporting 10,000+ users globally, implementing international payment gateways and multi-language support (11 languages).",
      "Built scalable RESTful APIs using Node.js and managed Google Cloud Platform services (Firestore, Maps, Auth, Analytics), maintaining 99.9% system availability during rapid user growth.",
      "Designed and implemented scalable application architecture, optimizing database queries and improving response times by 40% through performance tuning and indexing strategies.",
      "Automated CI/CD pipelines using GitHub Actions for testing, code validation, and zero-downtime deployments across multiple environments, ensuring continuous delivery reliability.",
      "Implemented complex features including online payment systems, real-time notifications, and advanced scheduling mechanisms for sports management functionality."
    ],
    techBadges: ['React Native', 'Node.js', 'Firestore', 'GCP', 'Payment Integration', 'Multi-language Support', 'Scalable Architecture', 'PostgreSQL']
  },
  {
    id: 'freelance-consolidated',
    role: 'Full Stack Software Developer',
    company: 'Independent Consultant',
    period: 'Sep 2021 - Sep 2024',
    description: [
      "Delivered 15+ end-to-end full stack solutions for international clients, translating requirements into production-ready mobile, web, and backend systems.",
      "Developed React Native applications with offline-first capabilities, native iOS (SwiftUI/UIKit), and native Android (Kotlin) implementations with seamless native module bridging.",
      "Built responsive web applications using React, Angular, Vue.js, and Nuxt (SSR/SSG/ISG) with advanced state management (Redux Toolkit, Zustand) and PWA capabilities.",
      "Designed and implemented scalable backend services using Node.js, NestJS, and Express, exposing REST and GraphQL APIs with comprehensive documentation and testing.",
      "Architected CI/CD pipelines using GitHub Actions for automated testing, linting, secure database migrations, and deployments across AWS, GCP, Heroku, and Railway.",
      "Managed PostgreSQL, MySQL, MongoDB, Firestore, and Redis databases, implementing automated backup pipelines and data reliability strategies.",
      "Containerized applications using Docker and orchestrated deployments across multiple cloud providers, maintaining production stability and performance."
    ],
    techBadges: ['React Native', 'React', 'Angular', 'Vue.js', 'Nuxt', 'NestJS', 'Express', 'GraphQL', 'AWS', 'GCP', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'Offline-First']
  },
  {
    id: 'tugerente',
    role: 'Full Stack Software Developer',
    company: 'tuGerente',
    period: 'Aug 2022 - Feb 2023',
    description: [
      "Led the mobile development team, overseeing end-to-end development and deployment of iOS and Android applications for ERP/Inventory management systems.",
      "Enforced development standards and collaborated on backend architecture and strategy, ensuring quality and timely delivery of core features.",
      "Managed Google Cloud Platform services for authentication and data persistence using Firestore, while utilizing AWS (S3, EC2) for scalable storage and compute resources.",
      "Contributed technical insights to optimize development processes and improve team efficiency."
    ],
    techBadges: ['Mobile Leadership', 'React Native', 'AWS', 'GCP', 'Android', 'iOS', 'Firestore', 'Node.js', 'Docker', 'PostgreSQL']
  },
  {
    id: 'cannedhead',
    role: 'Frontend Developer',
    company: 'Canned Head',
    period: 'Nov 2021 - Feb 2022',
    description: [
      "Specialized in React frontend development, translating UI/UX designs into responsive, pixel-perfect web applications.",
      "Collaborated closely with backend teams to integrate frontend components with REST APIs, ensuring seamless data flow and user experience.",
      "Produced clear and maintainable code documentation to support long-term scalability and team collaboration."
    ],
    techBadges: ['React', 'UI/UX', 'Responsive Design', 'API Integration', 'Documentation', 'TypeScript']
  }
];