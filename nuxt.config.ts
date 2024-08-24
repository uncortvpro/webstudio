// https://nuxt.com/docs/api/configuration/nuxt-config
import { fontsPreload } from './config/fontsPreload';

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_APP_BASE_URL,
    },
  },
  modules: [
    '@nuxt/ui',
    'nuxt-svgo',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@davestewart/nuxt-scrollbar',
    '@nuxt/image',
  ],
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
      title: 'Web Development, UX/UI Design, AI Solutions, SMM | Ocean Script',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
        {
          name: 'description',
          content:
            'Ocean Script - your reliable web agency specializing in unique website and web application development. We offer a full range of services from design to development and support. Trust the professionals and achieve quality results!"',
        },
        {
          name: 'keywords',
          content:
            'web development, ocean-script, website design, UX/UI design, responsive websites, intuitive interfaces, user experience design, presentation design, visual presentations, product development, operations setup, AI solutions, artificial intelligence, automation technologies, decision-making tools, social media management, SMM services, targeted advertising, online visibility, digital marketing, engaging websites, frontend development, backend development, full-stack development, UI design services, user-centered design, creative presentations, product launch strategy, operational efficiency, AI-driven automation, AI technologies, social media strategy, social media campaigns, targeted social ads, brand visibility, digital strategy',
        },
      ],
      script: [
        {
          hid: 'schema-markup',
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'Ocean Script',
            url: 'https://www.ocean-script.com/',
            logo: '/img/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+38-095-343-75-62',
              contactType: 'Customer Service',
            },
          }),
        },
      ],
      link: fontsPreload,
    },
    baseURL: process.env.NUXT_APP_BASE_URL,
    buildAssetsDir: 'assets',
  },

  compatibilityDate: '2024-07-09',
});
