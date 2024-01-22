<script setup lang="ts">
  defineProps<{
    type: 'right' | 'left';
  }>();
</script>

<template>
  <img
    v-if="type === 'right'"
    class="absolute right-[0] top-[35%] size-[100vw] max-h-[1400px] max-w-[1400px] md:top-[5%] lg:size-[70vw] 4xl:top-[15%]"
    src="@img/bg_gradient_1.png"
    alt=""
  />
  <img
    v-if="type === 'left'"
    class="absolute bottom-0 left-[0] size-[100vw] max-h-[1400px] max-w-[1400px] lg:size-[70vw]"
    src="@img/bg_gradient_2.png"
    alt=""
  />
</template>

<style scoped></style>
