<script setup lang="ts">
  const props = defineProps<{
    message: string;
  }>();
</script>

<template>
  <UiModal isBtnClose :ui="{ width: 'max-w-[390px] 2xl:max-w-[422px]', container: 'items-center' }">
    <div class="flex flex-col items-center">
      <div
        class="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-[#C5ECAD] md:h-[80px] md:w-[80px] xl:h-[100px] xl:w-[100px]"
      >
        <SvgoCheckmarkRounded class="!h-auto !w-[50%] text-transparent" />
      </div>
      <h3
        class="mt-[10px] text-center text-[20px] md:mb-[22px] md:mt-[15px] md:text-[28px] xl:mb-[25px] xl:mt-[18px] xl:text-[35px]"
      >
        {{ message }}
      </h3>
    </div>
  </UiModal>
</template>

<style scoped></style>
