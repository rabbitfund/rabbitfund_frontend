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
  css: ['~/assets/css/swiper.css'],
  routeRules: {
    '/member/**': { ssr: false }
  }
});
