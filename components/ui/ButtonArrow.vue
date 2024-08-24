<script lang="ts" setup></script>

<template>
  <UiButton class="hover_opacity flex items-center gap-[10px] self-end xl:gap-[15px]">
    <span class="text-[12px] uppercase uppercase text-black md:text-[18px] xl:text-[23px]">
      <slot />
    </span>
    <SvgoArrowSecond class="!w-[clamp(26px,5vw,40px)] stroke-black stroke-[2px]" />
  </UiButton>
</template>

<style scoped></style>
