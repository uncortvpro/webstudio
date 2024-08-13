<script setup lang="ts">
  const changeVisibilityMenu: any = inject('changeVisibilityMenu');

  const onClickMenuItem = (path: string) => {
    if (changeVisibilityMenu) {
      changeVisibilityMenu(false);
    }
    navigateTo(path);
  };
</script>

<template>
  <ul>
    <li class="menu_item">
      <UiButtonOpacity @click="onClickMenuItem('#services')">services</UiButtonOpacity>
    </li>
    <li class="menu_item">
      <UiButtonOpacity @click="onClickMenuItem('#best_projects')">portfolio</UiButtonOpacity>
    </li>
    <li class="menu_item">
      <UiButtonOpacity @click="onClickMenuItem('#contact')">contacts</UiButtonOpacity>
    </li>
  </ul>
</template>

<style scoped>
  .menu_item {
    @apply text-[15px] font-medium lowercase text-white md:text-[23px] xl:text-[30px];
  }
</style>
