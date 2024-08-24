<script setup lang="ts">
  const { whyWe } = useData();

  const servicesSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(servicesSection, isShowSection);
</script>

<template>
  <div ref="servicesSection">
    <UiSection
      :class="
        cn('translate-x-[10%] py-[35px]  opacity-0  duration-[2s] md:py-[45px] 3xl:py-[80px]', {
          ' opacity-1 translate-x-[0%]': isShowSection,
        })
      "
    >
      <template #title> why we? </template>
      <template #content>
        <div
          class="mt-[30px] grid gap-[20px] md:mt-[50px] md:gap-[22px] lg:flex-row lg:items-center lg:justify-between lg:gap-[59px] xl:grid-cols-3 2xl:gap-[89px]"
        >
          <CommonWhyWeItem v-for="(item, index) in whyWe" :key="index" :item="item" />
        </div>
      </template>
    </UiSection>
  </div>
</template>

<style scoped></style>
