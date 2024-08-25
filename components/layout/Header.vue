<script setup lang="ts">
  const isActive = ref<boolean>(false);
  const changeVisibilityMenu = (value: boolean) => {
    isActive.value = value;
  };
  provide('changeVisibilityMenu', changeVisibilityMenu);
</script>

<template>
  <header class="py-[25px] md:py-[30px] 3xl:py-[40px]">
    <div class="flex justify-between">
      <CommonLogo class="relative z-[40]" />
      <CommonMenuList class="hidden items-center gap-[50px] lg:flex 3xl:gap-[80px]" />
      <UiButtonBurger
        :isActive="isActive"
        class="relative z-[60] lg:hidden"
        @click="isActive = !isActive"
      />
      <CommonMenuMobile
        :isActive="isActive"
        class="lg:hidden"
        @changeVisibilityMenu="changeVisibilityMenu"
      />
    </div>
  </header>
</template>

<style scoped></style>
