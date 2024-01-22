<script setup lang="ts"></script>

<template>
  <div>
    <SectionsMain />
    <div class="relative">
      <UiBgGradientAbsolute type="right" />
      <UiBgGradientAbsolute type="left" />
      <SectionsBestProjects id="best_projects" />
      <SectionsServices id="services" class="mt-[70px] md:mt-[95px] xl:mt-[120px]" />
      <SectionsReviews class="mt-[70px] md:mt-[95px] xl:mt-[120px]" />
      <SectionsContact id="contact" class="relative mt-[70px] xl:mt-[120px]" />
      <LayoutFooter
        class="relative pb-[35px] pt-[70px] md:pb-[90px] md:pt-[95px] xl:pb-[116px] xl:pt-[120px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
