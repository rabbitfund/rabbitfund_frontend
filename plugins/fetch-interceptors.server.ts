export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  // const { API_BASE } = runtimeConfig.public;
  const { SERVER_API_BASE } = runtimeConfig;

  globalThis.$fetch = $fetch.create({
    baseURL: SERVER_API_BASE,
    onRequest({ options }) {
      console.log(options);
    }
  });
});
