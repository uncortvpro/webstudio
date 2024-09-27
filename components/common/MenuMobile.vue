<script setup lang="ts">
  defineProps<{
    isActive: boolean;
  }>();
</script>

<template>
  <div
    v-if="isActive"
    class="fixed left-0 top-0 z-50 size-full"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  >
    <div
      class="bg_blur_dark h-full animate-fade-down px-padding-container-x pb-[59px] pt-[88px] animate-duration-300 md:px-padding-container-x-md md:pb-[57px] md:pt-[128px]"
    >
      <div class="flex h-full flex-col items-start justify-between">
        <CommonMenuList
          :ui="{
            item: '!text-[10vw] !text-white',
          }"
          class="mt-[10vh] flex flex-col gap-[15px] md:gap-[25px]"
        />
        <CommonLangSwitcher class="block !text-[8vw] !text-white" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
