<script setup lang="ts">
  const logos = [
    '/img/laravel_logo.png',
    '/img/vue_logo.png',
    '/img/MySQL_logo.svg',
    '/img/PHP-logo.svg.png',
    '/img/Docker_logo.png',
    '/img/React-Logo.webp',
    '/img/nuxt-logo.png',
    '/img/Pinialogo.svg',
    '/img/Go-Logo_Blue.png',
    '/img/Typescript_logo_2020.svg.png',
    '/img/mongodb-logo-D13D67C930-seeklogo.com.png',
    '/img/tailwind_logo.png',
    '/img/postgresql-branding-icon-symbol-logo-vector-.webp',
    '/img/Redis_logo.png',
    '/img/nodejs_logo.png',
    '/img/Git-Icon-1788C.png',
    '/img/neo4j-icon-452x512.png',
    '/img/Figma-logo.png',
    '/img/logo-html.webp',
    '/img/logo-css.webp',
    '/img/JavaScript-logo.png',
    '/img/Bootstrap_logo.svg',
  ];
</script>

<template>
  <div>
    <UiSection>
      <template #title> technologies </template>
    </UiSection>
    <Vue3Marquee class="mf:mt-[45px] mt-[35px] xl:mt-[60px]">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        alt="Logo 1"
        class="filter_img mx-4 h-12"
      />
    </Vue3Marquee>
  </div>
</template>

<style scoped>
  .filter_img {
    filter: brightness(90%) sepia(100%) hue-rotate(0deg) saturate(0) opacity(100%);
  }
</style>
