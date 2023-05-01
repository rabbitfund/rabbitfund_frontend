// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  runtimeConfig: {
    public: {
      GOOGLE_CLIENT_ID: '',
      API_BASE: ''
    }
  },
  routeRules: {
    '/member-center/**': { ssr: false }
  }
});
