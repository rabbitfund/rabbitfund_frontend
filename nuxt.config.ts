// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    SERVER_API_BASE: 'http://localhost:3000',
    public: {
      GOOGLE_CLIENT_ID: '',
      API_BASE: ''
    }
  },
  routeRules: {
    '/member/**': { ssr: false }
  }
});
