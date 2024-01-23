<script setup lang="ts">
  const services: OurService[] = [
    {
      title: 'Web-Development',
      description: 'Engaging and responsive websites for a strong online presence',
    },
    {
      title: 'UX/UI Design',
      description: 'Intuitive and user-friendly interfaces for seamless user experiences',
    },
    {
      title: 'presentation Design',
      description: 'Crafting visually stunning presentations to elevate your message effectively',
    },
  ];
  const servicesSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(servicesSection, isShowSection);
</script>

<template>
  <div ref="servicesSection" :class="{ min_height_animate_sec: !isShowSection }">
    <UiSection v-show="isShowSection" class="duration_show_section animate-fade-left">
      <template #title> services </template>
      <template #content>
        <div
          class="flex flex-col gap-[20px] md:gap-[22px] lg:flex-row lg:items-center lg:justify-between lg:gap-[59px] 2xl:gap-[89px]"
        >
          <CommonServicesItem v-for="(service, index) in services" :key="index" :item="service" />
        </div>
      </template>
    </UiSection>
  </div>
</template>

<style scoped></style>
