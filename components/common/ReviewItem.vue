<script setup lang="ts">
  const props = defineProps<{
    review: Review;
  }>();
</script>

<template>
  <div
    class="flex flex-col justify-between rounded-[25px] bg-[rgba(0,10,255,0.3)] p-[20px] md:p-[25px] xl:rounded-[50px] xl:px-[32px] xl:py-[46px]"
  >
    <div>
      <h5 class="text-[15px] font-medium text-white md:text-[23px] xl:text-[30px]">
        {{ props.review.name }}
      </h5>
      <div
        class="scroll_container mt-[15px] h-[200px] overflow-auto overscroll-x-contain pr-[10px] text-[12px] leading-[150%] text-white md:mt-[5px] md:text-[20px] xl:mt-[13px] xl:text-[25px]"
      >
        <p>
          {{ props.review.review }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  .scroll_container > .ps__rail-x,
  .scroll_container > .ps__rail-y {
    @apply !opacity-60;
  }
</style>
