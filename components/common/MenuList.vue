<script setup lang="ts">
  defineProps<{
    ui?: {
      item: string;
    };
  }>();

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
    <li :class="cn('menu_item', ui?.item)">
      <UiButton class="hover_opacity lowercase" @click="onClickMenuItem('#services')">{{
        $t('labels.services')
      }}</UiButton>
    </li>
    <li :class="cn('menu_item', ui?.item)">
      <UiButton class="hover_opacity lowercase" @click="onClickMenuItem('#best_projects')">{{
        $t('labels.portfolio')
      }}</UiButton>
    </li>
    <li :class="cn('menu_item', ui?.item)">
      <UiButton class="hover_opacity lowercase" @click="onClickMenuItem('#contact')">{{
        $t('labels.contacts')
      }}</UiButton>
    </li>
  </ul>
</template>

<style scoped>
  .menu_item {
    @apply text-[15px] font-medium lowercase text-black md:text-[23px] 3xl:text-[30px];
  }
</style>
