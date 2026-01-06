// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon'
  ],

  // CSS
  css: ['~/assets/css/main.css'],

  // App Configuration
  app: {
    // Assuming the repository name is 'portfolio-abdiel'. Change this if deploying to a custom domain or different repo.
    baseURL: '/portfolio-nuxt/',
    head: {
      title: 'Abdiel Orellana - Senior Frontend Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Abdiel Orellana, a Full Stack Developer specializing in React Native, Expo, and Cloud Infrastructure.' },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  // Deployment Configuration for GitHub Pages
  ssr: true, // Static Site Generation needs SSR during build
  nitro: {
    preset: 'github-pages'
  }
})
