<script setup lang="ts">
  defineProps<{
    item: OurService;
  }>();
</script>

<template>
  <div>
    <div class="flex items-center gap-[7px] md:gap-[10px]">
      <SvgoItemMark class="!h-[2vw] max-h-[10px] !w-[2vw] max-w-[10px] text-white" />
      <h3 class="text-[15px] font-medium lowercase text-white md:text-[23px] xl:text-[30px]">
        {{ item.title }}
      </h3>
    </div>
    <p
      class="mt-[5px] font-primary text-[12px] leading-[150%] text-white md:text-[20px] xl:mt-[7px] xl:text-[25px]"
    >
      {{ item.description }}
    </p>
  </div>
</template>

<style scoped></style>
