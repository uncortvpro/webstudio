<script setup lang="ts">
  const { news } = useData();

  const servicesSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(servicesSection, isShowSection);
</script>

<template>
  <div ref="servicesSection">
    <UiSection
      :class="
        cn(
          'translate-y-[10%] bg-[rgba(141,122,100,0.1)] py-[25px] opacity-0 duration-[2s] md:py-[35px] 3xl:py-[60px]',
          {
            'opacity-1 translate-y-[0%]': isShowSection,
          }
        )
      "
    >
      <template #title> news & updates </template>
      <template #content>
        <div class="grid gap-[15px] md:grid-cols-3 xl:gap-[25px]">
          <CommonCardNews v-for="(item, index) in news" :key="index" :news="item" />
        </div>
      </template>
    </UiSection>
  </div>
</template>

<style scoped></style>
