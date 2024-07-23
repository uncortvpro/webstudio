// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
    },
  },
  modules: ['@nuxt/ui', 'nuxt-svgo', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-swiper'],
  ssr: false,
  css: ['~/assets/css/fonts.css'],
  alias: {
    '@img': './assets/img',
  },
  swiper: {
    modules: [
      // 'navigation',
      // 'pagination',
      // 'thumbs',
      // 'free-mode',
      // 'controller',
      'autoplay',
      // 'effect-creative',
      // 'scrollbar',
      'grid',
    ],
  },
  svgo: {
    autoImportPath: './assets/img/svg/',
  },
  colorMode: {
    preference: 'light',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
      title: 'Ocean Script',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
        {
          name: 'description',
          content: 'Web agency Ocean Script',
        },
        {
          name: 'keywords',
          content: 'web agency, ocean script, web, web studio, design agency, design studio',
        },
      ],
    },
    baseURL: process.env.NUXT_APP_BASE_URL,
    buildAssetsDir: 'assets',
  },

  compatibilityDate: '2024-07-09',
});
