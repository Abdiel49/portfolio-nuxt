import type { Project } from '~/types';

export const projects: Project[] = [
  {
    id: "racquets-app",
    title: "Racquets App",
    description: "Comprehensive sports management ecosystem for racquetball, pickleball, and padel communities with tournament management and coaching platform.",
    longDescription: "A complete mobile and web application serving the racquetball, pickleball, and padel community. The platform enables clubs to manage facilities and staff, allows players to organize and participate in tournaments, join skill-level challenges, and access professional coaching courses. Features international payment processing for 10,000+ users globally, multi-language support (11 languages), and real-time tournament bracket management.",
    imgUrl: '/images/projects/racquets/p.png',
    tags: ["React Native", "Expo", "Sports Management", "Global Scale"],
    techStack: ["React Native", "Node.js", "Stripe", "Firebase", "Figma", "Google Maps API", "Multi-language Support"],
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
    skillsShown: ["Scalable Architecture", "Complex Scheduling", "Real-time Updates", "Payment Gateway Integration", "Multi-language Implementation"]
  },
  {
    id: "whootrip",
    title: "WhoopTrip",
    description: "Adventure tour booking platform with integrated payments, itinerary management, and real-time group coordination.",
    longDescription: "A mobile application designed for booking tours in natural parks, offering activities such as hiking and rafting. The platform integrates Stripe for payments, allows users to plan personalized itineraries through an interactive agenda, and features a robust administration panel for tour management. Real-time individual and group chat enables seamless coordination between guides and participants.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=WhoopTrip',
    tags: ["React Native", "Expo", "Real-time Chat", "Payment Integration", "Mobile"],
    techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Firebase", "Figma"],
    links: {},
    gallery: [
      "/images/projects/whootrip/main.webp",
      "/images/projects/whootrip/detalle-actividad.png",
      "/images/projects/whootrip/chats.png",
    ],
    skillsShown: ["Clean Architecture", "Real-time WebSocket Updates", "Payment Gateway Integration", "Push Notifications", "Trip Management"]
  },
  {
    id: "manymore",
    title: "ManyMore",
    description: "Group buying marketplace leveraging volume-based dynamic pricing to deliver progressive discounts to consumers.",
    longDescription: "An e-commerce platform where users access products with special volume-based discounts from allied merchants. The system implements a sophisticated buying model where discounts increase with purchase volume, incentivizing bulk orders. Includes a comprehensive administrative panel for merchants to manage offers, monitor purchase requests, and track inventory in real-time.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=ManyMore',
    tags: ["React Native", "Expo", "E-commerce", "Real-time Updates"],
    gallery: [
      "/images/projects/manymore/manymore-detail-category.png",
      "/images/projects/manymore/manymore-detail-offer.png",
      "/images/projects/manymore/manymore-employes.png",
    ],
    techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Firebase", "Figma"],
    links: {},
    skillsShown: ["Clean Architecture", "Real-time Updates", "Dynamic Pricing Logic", "Payment Gateway Integration", "Push Notifications"]
  },
  {
    id: "daypass",
    title: "Daypass",
    description: "Travel booking application with advanced service customization and dynamic pricing based on user preferences.",
    longDescription: "An intelligent accommodation booking platform for searching and reserving hotels, vacation homes, and apartments in tourist destinations. The application stands out through its high level of customization, allowing users to filter and select specific amenities and services to adjust the final price according to their actual needs, rather than paying for bundled services.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Daypass',
    tags: ["React Native", "Expo", "Travel", "Booking"],
    techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Firebase", "Figma"],
    gallery: [
      "/images/projects/daypass/daypass-detail.png",
      "/images/projects/daypass/daypass-list.png",
      "/images/projects/daypass/daypass-mapa.png",
    ],
    links: {},
    skillsShown: ["Clean Architecture", "Custom Service Filtering", "Dynamic Pricing", "Payment Gateway Integration", "Push Notifications"]
  },
  {
    id: "toqueapp",
    title: "ToqueApp",
    description: "Social discovery and dating platform connecting users based on common interests and real-time geolocation.",
    longDescription: "ToqueApp is a social networking and dating platform that intelligently connects people with similar interests. The application uses geolocation services to identify nearby users in real-time and enables chat functionality once there is mutual interest (match), facilitating meaningful connections based on shared passions.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=ToqueApp',
    tags: ["React Native", "Expo", "Geolocation", "Social Networking", "Real-time"],
    techStack: ["React Native", "Expo", "Socket.io", "Stripe", "Firebase", "Figma"],
    gallery: [
      "/images/projects/toque/toque-chat-detail.png",
      "/images/projects/toque/toque-near-me.png",
      "/images/projects/toque/toque-perfil.png",
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.tangram.toque",
      appStore: "https://apps.apple.com/es/app/toque-conoce-por-cercan%C3%ADa/id6737775881"
    },
    skillsShown: ["Clean Architecture", "Real-time WebSocket Updates", "Geolocation Integration", "Matching Algorithm", "Push Notifications"]
  },
  {
    id: "enjoy-loyalty",
    title: "Enjoy Loyalty",
    description: "Customer loyalty and rewards platform with tiered membership levels and point-based redemption system.",
    longDescription: "A comprehensive loyalty program enabling users to earn points for purchases at affiliated merchants and redeem them as payment. The platform features a sophisticated tier system (Silver, Gold, Platinum) based on annual spending, granting exclusive benefits and privileges aligned with customer lifetime value.",
    imgUrl: '/images/projects/loyalty/d.png',
    gallery: [
      "/images/projects/loyalty/main.png",
      "/images/projects/loyalty/menu.png",
      "/images/projects/loyalty/detail.png",
      "/images/projects/loyalty/detail-2.png",
      "/images/projects/loyalty/detail-22.png",
      "/images/projects/loyalty/filter.png",
    ],
    tags: ["React Native", "Loyalty Program", "E-commerce", "Rewards"],
    techStack: ["React Native", "Socket.io", "Stripe", "Firebase", "OneSignal"],
    links: {
      appStore: "https://apps.apple.com/cr/app/enjoy-loyalty/id1550607553",
      playStore: "https://play.google.com/store/apps/details?id=com.nwideas.enjoygrouployalty"
    },
    skillsShown: ["Clean Architecture", "Reward Systems", "Tiered Membership Logic", "Push Notifications", "Payment Gateway Integration"]
  },
  {
    id: "puntos-del-sol",
    title: "Puntos del Sol",
    description: "Retail loyalty platform for Grupo del Sol network enabling point accumulation and prize redemption across merchant partners.",
    longDescription: "A targeted loyalty platform designed for Grupo del Sol, a network of affiliated retail businesses. The application allows customers to earn points ('paw prints') for their consumption at associated merchants and redeem them for a wide variety of prizes within the same commercial ecosystem, encouraging repeat purchases and customer retention.",
    imgUrl: '/images/projects/solipuntos/d.png',
    gallery: [
      "/images/projects/solipuntos/dashboard.png",
      "/images/projects/solipuntos/detail.png",
      "/images/projects/solipuntos/profile.png",
      "/images/projects/solipuntos/qr.png",
      "/images/projects/solipuntos/reguards.png",
    ],
    tags: ["React Native", "Points System", "Retail", "QR Scanning"],
    techStack: ["React Native", "Socket.io", "Stripe", "Firebase", "OneSignal", "AdobeXD"],
    links: {
      appStore: "https://apps.apple.com/gt/app/puntos-del-sol/id6450683279",
      playStore: "https://play.google.com/store/apps/details?id=com.nwideas.grupodelsol"
    },
    skillsShown: ["Clean Architecture", "Real-time Updates", "QR Code Integration", "Push Notifications", "Payment Gateway Integration"]
  },
  {
    id: "virbac-club",
    title: "Virbac Club",
    description: "Pet nutrition loyalty program for pet owners, rewarding purchases of premium pet food with redeemable points.",
    longDescription: "A specialized loyalty platform dedicated to rewarding customers of Virbac's premium HPM pet nutrition product line. Users accumulate 'paw prints' (points) with each purchase, which can be redeemed for premium nutrition products for their pets. The platform encourages informed pet care decisions and drives repeat purchases through a gamified rewards experience.",
    imgUrl: '/images/projects/virbac/d.png',
    gallery: [
      "/images/projects/virbac/main.png",
      "/images/projects/virbac/detail.png",
      "/images/projects/virbac/modal.png",
      "/images/projects/virbac/points.png",
      "/images/projects/virbac/news.png",
      "/images/projects/virbac/news-detail.png",
    ],
    tags: ["React Native", "Pet Care", "Loyalty", "E-commerce"],
    techStack: ["React Native", "Socket.io", "Stripe", "AdobeXD", "Firebase", "OneSignal"],
    links: {
      liveDemo: "https://es.virbac.com/",
      appStore: "https://apps.apple.com/cr/app/virbac-club/id6667118314",
      playStore: "https://play.google.com/store/apps/details?id=com.beeloyalcard.virbac"
    },
    skillsShown: ["Clean Architecture", "Real-time Updates", "Push Notifications", "Gamified Rewards", "Content Management"]
  },
  {
    id: "sib-cochabamba",
    title: "Sib Cochabamba",
    description: "Digital directory and promotional guide for local businesses, enabling search by category, location, and real-time offers.",
    longDescription: "An interactive directory available on both web and mobile platforms that showcases offers and services from businesses associated with SIB Cochabamba. Users can search by business category or location to discover detailed information including hours of operation, current promotions, and direct access to establishment social media accounts, supporting local business discovery.",
    imgUrl: "/images/projects/sib/sib-p.png",
    tags: ["React Native", "Directory", "Local Business", "Search & Filters"],
    techStack: ["React Native", "Figma", "Firebase", "NestJS", "PostgreSQL", "Docker"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.cochabamba.sib"
    },
    gallery: [
      "/images/projects/sib/sib-1.png",
      "/images/projects/sib/sib-2.png",
    ],
    skillsShown: ["Clean Architecture", "Full Stack Development", "Search & Filters", "Push Notifications", "Backend API Design"]
  },
  {
    id: "conduce-ya",
    title: "Conduce Ya",
    description: "Gamified traffic safety education platform with exam simulators, achievements, and offline learning capabilities.",
    longDescription: "An innovative educational application focused on traffic regulations and road safety using gamification techniques similar to language-learning platforms. It allows users to take realistic driving exam simulations, earn achievement badges, and accumulate virtual coins to unlock helpful hints. The offline-first architecture ensures learning is accessible anywhere, without internet connectivity requirements.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Conduce Ya',
    gallery: [
      "/images/projects/drive-now/main.webp",
      "/images/projects/drive-now/test.webp",
      "/images/projects/drive-now/question.webp",
      "/images/projects/drive-now/end.jpg",
    ],
    tags: ["React Native", "Gamification", "EdTech", "Offline-First"],
    techStack: ["React Native", "Figma", "PouchDB", "WatermelonDB"],
    links: {},
    skillsShown: ["Gamification Logic", "Offline-First Architecture", "Clean Architecture", "State Management", "Achievement Systems"]
  },
  {
    id: "digall",
    title: "Digall",
    description: "Enterprise ERP system for construction material distribution with role-based access, inventory, and analytics.",
    longDescription: "A sophisticated mobile ERP application for managing construction material distribution centers at scale. The system includes comprehensive modules for employee management with hierarchical permissions and access control, customer tracking and relationship management, real-time order monitoring and fulfillment, inventory management with stock tracking, invoicing and billing automation, and analytical report generation for business intelligence.",
    imgUrl: 'https://placehold.co/600x400/1e293b/3b82f6?text=Digall',
    gallery: [
      "/images/projects/digall/products.webp",
      "/images/projects/digall/orders.webp",
      "/images/projects/digall/order.webp",
    ],
    tags: ["React Native", "ERP", "Logistics", "Enterprise"],
    techStack: ["React Native", "Expo", "FCM", "Firebase"],
    links: {},
    skillsShown: ["Role-Based Access Control", "Inventory Systems", "Clean Architecture", "Enterprise Design Patterns", "Complex Business Logic"]
  }
];