// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
  ],
  runtimeConfig: {
    SERVER_API_BASE: 'http://localhost:3000',
    public: {
      GOOGLE_CLIENT_ID: '',
      API_BASE: '',
      NEWEBPAY_FORM_ACTION: '',
      NEWEBPAY_MERCHANT_ID: '',
      NEWEBPAY_VERSION: ''
    }
  },
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }]
  },
  manifest: {
    name: '倍而兔募資平台',
    theme_color: '#F36B6B',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/favicon/android-chrome-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/favicon/android-chrome-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/favicon/apple-touch-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png'
      },
      {
        src: '/favicon/apple-touch-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png'
      },
      {
        src: '/favicon/apple-touch-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png'
      },
      {
        src: '/favicon/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        src: '/favicon/apple-touch-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/favicon/msapplication-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/favicon/mstile-150x150.png',
        sizes: '150x150',
        type: 'image/png'
      }
    ]
  },
  css: ['~/assets/css/swiper.css'],
  routeRules: {
    '/member/**': { ssr: false }
  }
});
