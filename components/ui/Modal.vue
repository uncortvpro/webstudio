<script setup lang="ts">
  defineProps<{
    ui?: any;
  }>();
</script>

<template>
  <UModal
    :ui="{
      wrapper: 'z-[101]',
      container: 'items-start sm:items-start',
      base: '!p-[25px] md:!px-[39px] md:!py-[30px] 4xl:!py-[35px] 4xl:!px-[54px]',
      overlay: { background: 'bg-[rgba(0,0,0,0.6)]' },
      rounded: 'rounded-[10px] md:rounded-[20px]',
      background: 'bg-[rgb(179,181,229)]',
      ...ui,
    }"
  >
    <slot />
  </UModal>
</template>

<style scoped></style>
