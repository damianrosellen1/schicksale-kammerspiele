export default defineNuxtConfig({
  /**
   * Base Configuration
   */
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: {
    strict: true,
  },

  /**
   * Modules & Module Settings
   */
  modules: [
    '@vueuse/nuxt',
  ],
})
