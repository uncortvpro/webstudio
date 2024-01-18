<script setup lang="ts"></script>

<template>
  <ul>
    <li class="menu_item">
      <UiButtonOpacity to="/">services</UiButtonOpacity>
    </li>
    <li class="menu_item">
      <UiButtonOpacity to="/">portfolio</UiButtonOpacity>
    </li>
    <li class="menu_item">
      <UiButtonOpacity to="/">contacts</UiButtonOpacity>
    </li>
  </ul>
</template>

<style scoped>
  .menu_item {
    @apply text-[15px] font-medium lowercase text-white md:text-[23px] xl:text-[30px];
  }
</style>
