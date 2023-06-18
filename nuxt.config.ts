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
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: '倍而兔募資平台',
      meta: [
        {
          name: 'description',
          content:
            '歡迎來到倍而兔募資！我們是一個致力於幫助學校、公益和市集活動籌集資金的網站。我們相信每個人都有著獨特的想法和願景，但有時候缺少資金是實現這些願景的主要障礙。因此，我們希望能夠通過我們的平台幫助更多人實現他們的夢想。'
        },
        { property: 'og:title', content: '倍而兔募資平台' },
        { property: 'og:url', content: 'https://rabbitfund-frontend.vercel.app/' },
        { property: 'og:description', content: '歡迎來到倍而兔募資！' }
      ]
    }
  },

  css: ['~/assets/css/swiper.css'],
  routeRules: {
    '/member/**': { ssr: false }
  }
});
