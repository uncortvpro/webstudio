<script setup lang="ts">
  const { services } = useData();

  const servicesSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(servicesSection, isShowSection);
</script>

<template>
  <div ref="servicesSection" :class="cn('', { min_height_animate_sec: !isShowSection })">
    <UiSection
      :class="
        cn('duration_show_section translate-x-[-10%]  opacity-0 duration-[2s]', {
          'opacity-1 translate-x-[0%]': isShowSection,
        })
      "
    >
      <template #title> services </template>
      <template #content>
        <div
          class="grid gap-[20px] md:gap-[22px] lg:grid-cols-3 lg:flex-row lg:items-center lg:justify-between lg:gap-[59px] 2xl:gap-[89px]"
        >
          <CommonServicesItem v-for="(service, index) in services" :key="index" :item="service" />
        </div>
      </template>
    </UiSection>
  </div>
</template>

<style scoped></style>
