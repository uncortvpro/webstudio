<script setup lang="ts">
  const props = defineProps<{
    item: ProjectData['whyWe'][0];
  }>();
</script>

<template>
  <div>
    <div class="flex items-center gap-[7px] md:gap-[10px]">
      <SvgoItemMark class="!h-[2vw] max-h-[10px] !w-[2vw] max-w-[10px] text-black" />
      <h3 class="text-[15px] font-medium lowercase text-black md:text-[23px] xl:text-[30px]">
        {{ item.title }}
      </h3>
    </div>
    <p
      class="mt-[5px] font-primary text-[12px] leading-[150%] text-black md:text-[20px] xl:mt-[7px] xl:text-[22px]"
    >
      {{ item.description }}
    </p>
  </div>
</template>

<style scoped></style>
