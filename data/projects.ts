import type { Project } from '~/types';

export const projects: Project[] = [
  {
    id: 'racquets-app',
    title: 'Racquets App',
    description: 'A comprehensive mobile solution for tennis clubs and players.',
    longDescription: 'Racquets AppSuite provides a seamless experience for booking courts, managing memberships, and organizing tournaments. Built with React Native and Expo, it leverages a high-performance NestJS backend to handle real-time scheduling and notifications.',
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Racquets+App',
    gallery: [
      'https://placehold.co/600x800/1e293b/3b82f6?text=Screen+1',
      'https://placehold.co/600x800/1e293b/3b82f6?text=Screen+2',
      'https://placehold.co/600x800/1e293b/3b82f6?text=Screen+3'
    ],
    tags: ['React Native', 'NestJS', 'PostgreSQL'],
    techStack: ['React Native', 'Expo', 'NestJS', 'TypeORM', 'Socket.io'],
    links: {
      appStore: 'https://apple.com',
      playStore: 'https://google.com',
      liveDemo: 'https://racquets.com'
    },
    skillsShown: ['Clean Architecture', 'Real-time Updates', 'Payment Gateway Integration']
  },
  {
    id: 'tugerente-mobile',
    title: 'tuGerente Mobile',
    description: 'Business management on the go. Inventory, sales, and analytics.',
    longDescription: 'An enterprise-grade mobile application allowing business owners to monitor their operations in real-time. Features include complex data visualization, offline synchronization, and multi-user role management via AWS Cognito.',
    imgUrl: 'https://placehold.co/600x400/0f172a/22d3ee?text=tuGerente+Mobile',
    gallery: [
      'https://placehold.co/600x800/0f172a/22d3ee?text=Dashboard',
      'https://placehold.co/600x800/0f172a/22d3ee?text=Inventory'
    ],
    tags: ['Mobile Lead', 'AWS', 'Offline-First'],
    techStack: ['React Native', 'AWS Lambda', 'DynamoDB', 'Redux Toolkit'],
    links: {
      playStore: 'https://google.com'
    },
    skillsShown: ['Offline Synchronization', 'Complex State Management', 'CI/CD Pipelines']
  },
  {
    id: 'finance-tracker',
    title: 'Personal Finance Tracker',
    description: 'A personal project to track expenses and investments.',
    longDescription: 'A sleek, dark-mode first application for tracking personal finances. Focuses on intuitive UI/UX with smooth animations and instant feedback. Built to demonstrate mastery of Reanimated and Gesture Handler.',
    imgUrl: 'https://placehold.co/600x400/111827/a855f7?text=Finance+Tracker',
    tags: ['Open Source', 'UI/UX', 'Animations'],
    techStack: ['React Native', 'Reanimated 2', 'Victory Charts', 'Firebase'],
    links: {
      github: 'https://github.com/abdiel/finance-tracker'
    },
    skillsShown: ['Advanced Animations', 'Data Visualization', 'Serverless Functions']
  },
  // {
  //   id: 'racquets-app_1',
  //   title: 'Racquets App',
  //   description: 'A comprehensive mobile solution for tennis clubs and players.',
  //   longDescription: 'Racquets AppSuite provides a seamless experience for booking courts, managing memberships, and organizing tournaments. Built with React Native and Expo, it leverages a high-performance NestJS backend to handle real-time scheduling and notifications.',
  //   imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Racquets+App',
  //   gallery: [
  //     'https://placehold.co/600x800/1e293b/3b82f6?text=Screen+1',
  //     'https://placehold.co/600x800/1e293b/3b82f6?text=Screen+2',
  //     'https://placehold.co/600x800/1e293b/3b82f6?text=Screen+3'
  //   ],
  //   tags: ['React Native', 'NestJS', 'PostgreSQL'],
  //   techStack: ['React Native', 'Expo', 'NestJS', 'TypeORM', 'Socket.io'],
  //   links: {
  //     appStore: 'https://apple.com',
  //     playStore: 'https://google.com',
  //     liveDemo: 'https://racquets.com'
  //   },
  //   skillsShown: ['Clean Architecture', 'Real-time Updates', 'Payment Gateway Integration']
  // },
  // {
  //   id: 'tugerente-mobile_1',
  //   title: 'tuGerente Mobile',
  //   description: 'Business management on the go. Inventory, sales, and analytics.',
  //   longDescription: 'An enterprise-grade mobile application allowing business owners to monitor their operations in real-time. Features include complex data visualization, offline synchronization, and multi-user role management via AWS Cognito.',
  //   imgUrl: 'https://placehold.co/600x400/0f172a/22d3ee?text=tuGerente+Mobile',
  //   gallery: [
  //     'https://placehold.co/600x800/0f172a/22d3ee?text=Dashboard',
  //     'https://placehold.co/600x800/0f172a/22d3ee?text=Inventory'
  //   ],
  //   tags: ['Mobile Lead', 'AWS', 'Offline-First'],
  //   techStack: ['React Native', 'AWS Lambda', 'DynamoDB', 'Redux Toolkit'],
  //   links: {
  //     playStore: 'https://google.com'
  //   },
  //   skillsShown: ['Offline Synchronization', 'Complex State Management', 'CI/CD Pipelines']
  // },
  // {
  //   id: 'finance-tracker_1',
  //   title: 'Personal Finance Tracker',
  //   description: 'A personal project to track expenses and investments.',
  //   longDescription: 'A sleek, dark-mode first application for tracking personal finances. Focuses on intuitive UI/UX with smooth animations and instant feedback. Built to demonstrate mastery of Reanimated and Gesture Handler.',
  //   imgUrl: 'https://placehold.co/600x400/111827/a855f7?text=Finance+Tracker',
  //   tags: ['Open Source', 'UI/UX', 'Animations'],
  //   techStack: ['React Native', 'Reanimated 2', 'Victory Charts', 'Firebase'],
  //   links: {
  //     github: 'https://github.com/abdiel/finance-tracker'
  //   },
  //   skillsShown: ['Advanced Animations', 'Data Visualization', 'Serverless Functions']
  // }
];
