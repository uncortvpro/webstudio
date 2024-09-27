<script setup lang="ts">
  const { locale, locales, setLocale } = useI18n();
  const displayLocale = computed(() => {
    return locale.value;
  });

  const domain = computed(() => useRuntimeConfig().public.cookieDomain);

  const selectedLanguage = useCookie('selectedLanguage', {
    watch: true,
    domain: domain.value,
  });

  useHead({
    htmlAttrs: {
      lang: displayLocale,
    },
  });

  const filteredLocales = computed(() =>
    locales.value.map((item) => (typeof item !== 'string' ? item.code : item))
  );

  const handleLocaleChange = (code: string) => {
    selectedLanguage.value = code;
    setLocale(code);
  };
</script>

<template>
  <UiButton
    class="hover_opacity text-[15px] font-medium lowercase text-black md:text-[23px] 3xl:text-[30px]"
    @click="handleLocaleChange(selectedLanguage === 'en' ? 'ru' : 'en')"
  >
    <span v-if="locale === 'ru'">ru</span>
    <span v-if="locale === 'en'">en</span>
  </UiButton>
</template>

<style></style>
