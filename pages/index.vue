<script setup lang="ts"></script>

<template>
  <div>
    <SectionsMain />
    <div class="relative overflow-hidden">

      <SectionsBestProjects id="best_projects" />
      <SectionsServices id="services" class="my-[70px] md:my-[95px] xl:my-[120px]" />

      <SectionsNews />
      <SectionsLanguages class="mt-[70px] md:mt-[95px] xl:mt-[120px]" />

      <SectionsWhyWe class="mt-[70px] md:mt-[95px] xl:mt-[120px]" />
      <SectionsContact id="contact" class="relative z-10 mt-[70px] xl:mt-[120px]" />
      <LayoutFooter class="relative" />
    </div>
  </div>
</template>

<style scoped></style>
