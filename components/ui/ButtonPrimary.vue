<script setup lang="ts"></script>

<template>
  <UiButton
    class="relative flex w-fit items-center gap-[15px] overflow-hidden rounded-[50px] border-[2px] border-black bg-transparent px-[27px] py-[8px] text-[12px] font-semibold lowercase text-white duration-[0.4s] before:absolute before:inset-y-0 before:left-0 before:my-auto before:size-full before:rounded-[50px] before:bg-black before:duration-[0.4s] hover:border-black hover:pl-[37px] hover:text-black hover:before:left-[20px] hover:before:size-[12px] hover:before:rounded-[50%] md:px-[37px] md:py-[12px] md:text-[20px] hover:md:pl-[47px] xl:px-[50px] xl:py-[16px] xl:text-[25px] hover:xl:pl-[60px]"
  >
    <span class="relative z-[1]"> <slot /></span
  ></UiButton>
</template>

<style scoped></style>
