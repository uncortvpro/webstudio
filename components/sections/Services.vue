<script setup lang="ts">
  const { services } = useData();

  const servicesSection = ref();
  const isShowSection = ref<boolean>(true);
  useAnimateSection(servicesSection, isShowSection);
</script>

<template>
  <div ref="servicesSection" :class="cn('', { min_height_animate_sec: !isShowSection })">
    <UiSection v-show="isShowSection" class="duration_show_section animate-fade-left">
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
