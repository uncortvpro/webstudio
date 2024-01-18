<script setup lang="ts">
  const isActive = ref(false);
</script>

<template>
  <header class="py-[25px] md:py-[30px] xl:py-[40px]">
    <div class="flex justify-between">
      <CommonLogo class="relative z-[60]" />
      <CommonMenuList class="hidden items-center gap-[50px] lg:flex 3xl:gap-[80px]" />
      <UiButtonBurger
        :isActive="isActive"
        class="relative z-[60] lg:hidden"
        @click="isActive = !isActive"
      />
      <PagesMenuMobile v-show="isActive" class="lg:hidden" />
    </div>
  </header>
</template>

<style scoped></style>
