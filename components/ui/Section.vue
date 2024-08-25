<script setup lang="ts">
  defineProps<{
    ui?: {
      container?: string;
    };
  }>();
</script>

<template>
  <section>
    <div :class="cn('container py-5', ui?.container)">
      <div
        class="mb-[20px] flex items-center gap-[10px] md:mb-[25px] md:gap-[12px] xl:mb-[35px] xl:gap-[15px]"
      >
        <h2
          class="font-secondary text-[20px] font-semibold lowercase text-black md:text-[30px] xl:text-[45px]"
        >
          <slot name="title" />
        </h2>
      </div>
      <slot name="content" />
    </div>
  </section>
</template>

<style scoped></style>
