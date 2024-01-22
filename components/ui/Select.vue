<script setup lang="ts">
  defineProps<{
    currentValue: any;
    uiMenu?: any;
    placeholder?: string;
  }>();
</script>

<template>
  <USelectMenu
    v-slot="{ open }"
    class="input_primary_style w-full !p-0"
    :uiMenu="{
      trigger: 'inline-flex w-full',
      background: '',
      container:
        'rounded-[25px] input_primary_bg shadow-lg w-[100%] overflow-hidden pt-[5px] md:pt-[10px]',
      rounded: '',
      padding: 'p-0',
      base: '!ring-0',
      shadow: '',
      option: {
        base: 'input_primary_text lowercase input_primary_padding_x text-white',
        padding: 'px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]',
        active: 'bg-[rgba(0,10,255,0.3)]',
        size: '',
        selectedIcon: {
          base: 'hidden',
        },
      },
      ...uiMenu,
    }"
  >
    <UiButtonTextOpeningArrow
      style="text-transform: inherit"
      :class="
        cn(
          'input_primary_height  input_primary_text input_primary_padding_x relative z-40 flex w-full items-center justify-between normal-case !duration-0 hover:!opacity-100',
          {
            '!text-placeholder': !currentValue,
            '!justify-end': !currentValue && !placeholder,
          }
        )
      "
      :label="currentValue || placeholder"
      :open="open"
    />
  </USelectMenu>
</template>

<style scoped></style>
