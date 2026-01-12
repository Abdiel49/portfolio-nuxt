import type { Project } from '~/types';

export const projects: Project[] = [
  // {
  //   id: "whootrip",
  //   title: "WhoopTrip",
  //   description: "Adventure tour booking platform with integrated payments and itinerary management.",
  //   longDescription: "WhooTrip is a mobile application designed for booking tours in natural parks, offering activities such as hiking and rafting. The platform integrates Mercado Pago for payments, allows itinerary planning through a personalized agenda, and features a robust administration panel. It also includes real-time individual and group chats to coordinate tours.",
  //   imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=WhoopTrip',
  //   tags: ["React Native", "Expo", "Socket.io", "Stripe", "Mobile"],
  //   techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Figma", "Firebase"],
  //   links: {},
  //   gallery: [
  //     "/images/projects/whootrip/main.png",
  //     "/images/projects/whootrip/detalle-actividad.png",
  //     "/images/projects/whootrip/chats.png",
  //   ],
  //   skillsShown: ["Clean Architecture", "Real-time Updates", "Payment Gateway Integration", "Push Notifications"]
  // },
  // {
  //   id: "manymore",
  //   title: "ManyMore",
  //   description: "Group buying marketplace with progressive discounts and an offer management dashboard.",
  //   longDescription: "An e-commerce platform where users access products with special discounts through allied merchants. The system uses a volume-based buying model: the more units purchased, the higher the discount applied. It includes an administrative panel to manage the offer catalog and purchase requests.",
  //   imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=ManyMore',
  //   tags: ["React Native", "Expo", "Socket.io", "Webhooks"],
  //   techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Figma", "Firebase"],
  //   links: {},
  //   skillsShown: ["Clean Architecture", "Real-time Updates", "Payment Gateway Integration", "Push Notifications"]
  // },
  // {
  //   id: "daypass",
  //   title: "Daypass",
  //   description: "Travel booking app featuring custom filters and price optimization based on selected services.",
  //   longDescription: "An application for searching and booking accommodations (hotels, houses, or apartments) in tourist destinations. It stands out for its high level of customization, allowing users to filter specific services to adjust the final price according to their actual needs.",
  //   imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Daypass',
  //   tags: ["React Native", "Expo", "Stripe", "Mobile"],
  //   techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Figma", "Firebase"],
  //   links: {},
  //   skillsShown: ["Clean Architecture", "Custom Filtering", "Payment Gateway Integration", "Push Notifications"]
  // },
  // {
  //   id: "docdoc",
  //   title: "DocDoc",
  //   description: "Offline-first medical management application for hospital environments.",
  //   longDescription: "A healthcare technology solution that enables hospitals to manage medical and pharmaceutical materials. The app operates under an offline-first scheme to ensure information access in any hospital area, allowing for theoretical material tracking and inventory management by administrators.",
  //   imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=DocDoc',
  //   tags: ["React Native", "Expo", "Offline-First", "HealthTech"],
  //   techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Figma", "Firebase"],
  //   links: {},
  //   skillsShown: ["Offline-First Architecture", "Clean Architecture", "Push Notifications", "Inventory Management"]
  // },
  // {
  //   id: "toqueapp",
  //   title: "ToqueApp",
  //   description: "Dating app based on common interests and geolocation for real-time connections.",
  //   longDescription: "ToqueApp is a social networking and dating platform that connects people with similar interests. It uses geolocation services to identify nearby users and enables chat features once there is a mutual predisposition (match) to meet.",
  //   imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=ToqueApp',
  //   tags: ["React Native", "Expo", "Geolocation", "Social"],
  //   techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Figma", "Firebase"],
  //   links: {},
  //   skillsShown: ["Clean Architecture", "Real-time Updates", "Geolocation Services", "Push Notifications"]
  // },
  {
    id: "racquets-app",
    title: "Racquets App",
    description: "Comprehensive ecosystem for managing racquet sports, tournaments, and professional training.",
    longDescription: "A complete application for the racquetball, pickleball, and padel community. It allows clubs to manage facilities and staff, while players can organize tournaments, participate in skill-level challenges, and access courses taught by qualified coaches.",
    imgUrl: '/images/projects/racquets/p.png',
    tags: ["React Native", "Expo", "Sports", "Management"],
    techStack: ["React Native", "NodeJS", "Stripe", "Figma", "Firebase"],
    gallery: [
      "/images/projects/racquets/menu.jpg",
      "/images/projects/racquets/dashboard.jpg",
      "/images/projects/racquets/class-detail.jpg",
      "/images/projects/racquets/availavility.jpg",
    ],
    links: {
      liveDemo: "https://racquetsappsuite.com/",
      playStore: "https://play.google.com/store/apps/details?id=com.terracomsortium.tapps",
      appStore: "https://apps.apple.com/us/app/racquetsappsuite/id1592585843"
    },
    skillsShown: ["Clean Architecture", "Complex Scheduling", "Real-time Updates", "Payment Gateway Integration"]
  },
  {
    id: "enjoy-loyalty",
    title: "Enjoy Loyalty",
    description: "Customer loyalty system based on point accumulation and membership tiers.",
    longDescription: "A loyalty program that allows users to earn points for purchases at affiliated merchants to be used as a payment method. It includes a tier system (Silver, Gold, Platinum) based on annual spending, granting exclusive benefits according to the member's status.",
    imgUrl: '/images/projects/loyalty/d.png',
    gallery: [
      "/images/projects/loyalty/main.png",
      "/images/projects/loyalty/menu.png",
      "/images/projects/loyalty/detail.png",
      "/images/projects/loyalty/detail-2.png",
      "/images/projects/loyalty/detail-22.png",
      "/images/projects/loyalty/filter.png",
    ],
    tags: ["React Native", "Loyalty", "E-commerce"],
    techStack: ["React Native", "Socket.io", "Stripe", "Firebase", "One Signal"],
    links: {
      appStore: "https://apps.apple.com/cr/app/enjoy-loyalty/id1550607553",
      playStore: "https://play.google.com/store/apps/details?id=com.nwideas.enjoygrouployalty"
    },
    skillsShown: ["Clean Architecture", "Reward Systems", "Push Notifications", "Payment Gateway Integration"]
  },
  {
    id: "puntos-del-sol",
    title: "Puntos del Sol",
    description: "Rewards app for the network of businesses associated with Grupo del Sol.",
    longDescription: "A loyalty platform designed for Grupo del Sol, where customers earn points for their consumption at associated merchants and can redeem them for a wide variety of prizes within the same commercial network.",
    imgUrl: '/images/projects/solipuntos/d.png',
    gallery: [
      "/images/projects/solipuntos/dashboard.png",
      "/images/projects/solipuntos/detail.png",
      "/images/projects/solipuntos/profile.png",
      "/images/projects/solipuntos/qr.png",
      "/images/projects/solipuntos/reguards.png",
    ],
    tags: ["React Native", "Points System", "Retail"],
    techStack: ["React Native", "Socket.io", "Stripe", "Firebase", "One Signal", "AdobeXD"],
    links: {
      appStore: "https://apps.apple.com/gt/app/puntos-del-sol/id6450683279",
      playStore: "https://play.google.com/store/apps/details?id=com.nwideas.grupodelsol"
    },
    skillsShown: ["Clean Architecture", "Real-time Updates", "Push Notifications", "Payment Gateway Integration"]
  },
  {
    id: "virbac-club",
    title: "Virbac Club",
    description: "Specialized pet nutrition loyalty program for pet owners in Costa Rica.",
    longDescription: "A platform dedicated to rewarding the loyalty of Virbac's HPM food line consumers. Users accumulate 'paw prints' (points) with each purchase, which can be redeemed for nutrition products for their pets, encouraging care and repeat purchases.",
    imgUrl: '/images/projects/virbac/d.png',
    gallery: [
      "/images/projects/virbac/main.png",
      "/images/projects/virbac/detail.png",
      "/images/projects/virbac/modal.png",
      "/images/projects/virbac/points.png",
      "/images/projects/virbac/news.png",
      "/images/projects/virbac/news-detail.png",
    ],
    tags: ["React Native", "Pets", "Loyalty"],
    techStack: ["React Native", "Socket.io", "Stripe", "AdobeDX", "Firebase", "One Signal"],
    links: {
      liveDemo: "https://es.virbac.com/",
      appStore: "https://apps.apple.com/cr/app/virbac-club/id6667118314",
      playStore: "https://play.google.com/store/apps/details?id=com.beeloyalcard.virbac"
    },
    skillsShown: ["Clean Architecture", "Real-time Updates", "Push Notifications"]
  },
  {
    id: "sib-cochabamba",
    title: "Sib Cochabamba",
    description: "Digital guide for promotions and services from businesses associated with SIB Cochabamba.",
    longDescription: "Interactive directory (Web and Mobile) to view offers from associated merchants. It allows searches by category or location, showing detailed information such as hours, current promotions, and direct access to the establishments' social media.",
    imgUrl: "/images/projects/sib/sib-p.png",
    tags: ["React Native", "Directory", "Local Business"],
    techStack: ["React Native", "Figma", "Firebase", "NestJS", "PostgreSQL", "Dokcer"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.cochabamba.sib"
    },
    gallery: [
      "/images/projects/sib/sib-1.png",
      "/images/projects/sib/sib-2.png",
    ],
    skillsShown: ["Clean Architecture", "Push Notifications", "Search & Filters"]
  },
  {
    id: "conduce-ya",
    title: "Conduce Ya",
    description: "Gamified road safety education app with exam simulators and offline learning.",
    longDescription: "An educational app focused on traffic regulations using gamification techniques similar to Duolingo. It allows users to take driving exam simulations, earn achievements, and gain virtual coins to exchange for hints, all functioning without an internet connection.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Conduce Ya',
    tags: ["React Native", "Gamification", "EdTech", "Offline"],
    techStack: ["React Native",  "Figma", "PouchDB", "WatermelonDB"],
    links: {},
    skillsShown: ["Gamification Logic", "Offline-First", "Clean Architecture"]
  },
  {
    id: "digall",
    title: "Digall",
    description: "Mobile ERP system for the integrated management of construction material distribution.",
    longDescription: "An enterprise application for managing construction distribution centers. It includes modules for employee management with hierarchical permissions, customer tracking, order monitoring, real-time inventory, invoicing, and analytical report generation.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Digall',
    tags: ["React Native", "ERP", "Logistics", "Business"],
    techStack: ["React Native", "Expo", "FCM", "Firebase"],
    links: {},
    skillsShown: ["Role-Based Access Control", "Inventory Systems", "Clean Architecture"]
  },
  // {
  //   id: "hanheld",
  //   title: "Hanheld",
  //   description: "Omnichannel marketing hub for mass communication across multiple social platforms.",
  //   longDescription: "An advanced digital marketing platform that centralizes messaging through WhatsApp, Facebook, Instagram, Twitter, Telegram, LinkedIn, Email, and SMS. It allows companies to manage their omnichannel communication from a single interface.",
  //   imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Hanheld',
  //   tags: ["React Native", "Marketing", "Omnichannel"],
  //   techStack: ["React", "Webhooks", "Firebase"],
  //   links: {},
  //   skillsShown: ["Omnichannel Integration", "Clean Architecture", "Real-time Updates"]
  // },
  {
    id: "eventos-app",
    title: "Eventos App",
    description: "University event management and dissemination system with faculty segmentation.",
    longDescription: "A university application designed for creating and managing academic events. It allows students to sign up and receive personalized notifications based on their faculty or interests, while administrators can manage roles and event approvals.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Eventos App',
    tags: ["React Native", "Education", "Events"],
    techStack: ["React Native", "Expo", "Socket.io", "Firebase"],
    links: {},
    skillsShown: ["User Role Management", "Clean Architecture", "Push Notifications"]
  }
];