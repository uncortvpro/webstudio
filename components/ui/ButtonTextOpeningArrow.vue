<script setup lang="ts">
  defineProps<{
    label: string;
    open: boolean;
  }>();
</script>

<template>
  <UiButton class="hover_opacity inline-flex gap-x-[5px] p-0 uppercase md:gap-x-[7px]">
    <span>{{ label }}</span>

    <SvgoArrowTop
      color="transparent"
      :class="
        cn('h-1 w-2 stroke-black md:h-[5px] md:w-[10px] 4xl:h-[6px] 4xl:w-3', {
          'rotate-180': !open,
        })
      "
    />
  </UiButton>
</template>

<style scoped></style>
