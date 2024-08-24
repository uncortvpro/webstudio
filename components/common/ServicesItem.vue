<script setup lang="ts">
  defineProps<{
    item: OurService;
  }>();
</script>

<template>
  <div
    class="flex h-full flex-col justify-between rounded-[30px] bg-[#D9D9D9] px-[30px] py-[36px] md:rounded-[42px]"
  >
    <div class="flex items-center gap-[7px] md:gap-[10px]">
      <h3 class="text-[15px] font-medium lowercase text-black md:text-[23px] xl:text-[30px]">
        {{ item.title }}
      </h3>
    </div>
    <p
      class="mt-[5px] font-primary text-[12px] leading-[150%] text-black md:text-[20px] xl:mt-[7px] xl:text-[22px]"
    >
      {{ item.description }}
    </p>

    <div
      class="mt-[15px] flex items-center justify-between gap-[10px] md:mt-[27px] xl:mt-[34px] 2xl:mt-[47px]"
    >
      <img class="max-w-[80px] flex-1" :src="item.icon" alt="" />
      <UiButtonArrow class="shrink-0 self-center">learn more</UiButtonArrow>
    </div>
  </div>
</template>

<style scoped></style>
