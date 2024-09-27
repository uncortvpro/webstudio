<script setup lang="ts">
  const { resentProjects: tabs } = useData();
  const bestProjectsSection = ref();
  const isShowSection = ref<boolean>(false);

  useAnimateSection(bestProjectsSection, isShowSection);
</script>

<template>
  <div
    ref="bestProjectsSection"
    :class="
      cn(' ', {
        min_height_animate_sec: !isShowSection,
      })
    "
  >
    <div
      v-show="isShowSection"
      class="duration_show_section relative animate-fade-up bg-[rgba(141,122,100,0.1)] py-[25px] md:py-[35px] xl:py-[44px]"
    >
      <UiSection class="relative">
        <template #title> best projects </template>
      </UiSection>
      <CommonProjectsContainer :projects="tabs" />
    </div>
  </div>
</template>

<style>
  .swiper_tabs_button .swiper-wrapper {
    @apply pl-padding-container-x md:pl-padding-container-x-md xl:pl-padding-container-x-xl 3xl:pl-0;
  }
</style>
