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
</script>

<template>
  <UiSection class="bg-black">
    <template #title> services </template>
    <template #content>
      <div
        class="flex flex-col gap-[20px] md:gap-[22px] lg:flex-row lg:items-center lg:justify-between lg:gap-[59px] 2xl:gap-[89px]"
      >
        <CommonServicesItem v-for="(service, index) in services" :key="index" :item="service" />
      </div>
    </template>
  </UiSection>
</template>

<style scoped></style>
