<script setup lang="ts">
  defineProps<{
    ui?: any;
    isBtnClose?: boolean;
  }>();

  const emits = defineEmits(['closeModal']);
</script>

<template>
  <UModal
    :ui="{
      wrapper: 'z-[101]',
      container: 'items-start sm:items-start',
      base: '!p-[25px] md:!px-[39px] md:!py-[30px] 4xl:!py-[35px] 4xl:!px-[54px]',
      overlay: { background: 'bg-[rgba(0,0,0,0.6)]' },
      rounded: 'rounded-[10px] md:rounded-[20px]',
      background: 'bg-white',
      ...ui,
    }"
  >
    <div class="flex flex-col">
      <UiButton
        v-if="isBtnClose"
        class="hover_opacity relative mb-[30px] size-[30px] self-end"
        @click="emits('closeModal')"
      >
        <span class="absolute inset-0 m-auto h-[2px] w-full rotate-45 bg-black" />
        <span class="absolute inset-0 m-auto h-[2px] w-full rotate-[-45deg] bg-black" />
      </UiButton>
      <slot />
    </div>
  </UModal>
</template>

<style scoped></style>
