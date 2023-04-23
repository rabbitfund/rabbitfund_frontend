// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      GOOGLE_CLIENT_ID: '',
      API_BASE: ''
    }
  }
});
