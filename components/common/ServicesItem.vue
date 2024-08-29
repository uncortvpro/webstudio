<script setup lang="ts">
  defineProps<{
    item: OurService;
  }>();
  const isModalDetails = ref(false);
  const switchModalDetails = (value: boolean) => {
    isModalDetails.value = value;
  };
</script>

<template>
  <div
    class="custom_bg flex h-full flex-col justify-between rounded-[30px] px-[30px] py-[36px] md:rounded-[42px]"
  >
    <div class="flex items-center gap-[7px] md:gap-[10px]">
      <h3 class="text-[15px] font-medium lowercase text-black md:text-[23px] xl:text-[30px]">
        {{ item.title }}
      </h3>
    </div>
    <p
      class="mt-[5px] font-primary text-[12px] leading-[150%] text-black md:text-[20px] xl:mt-[7px] xl:text-[22px]"
    >
      {{ item.description }}
    </p>

    <div
      class="mt-[15px] flex items-center justify-between gap-[10px] md:mt-[27px] xl:mt-[34px] 2xl:mt-[47px]"
    >
      <img class="max-w-[80px] flex-1" :src="item.icon" alt="" />
      <UiButtonArrow class="shrink-0 self-center" @click="switchModalDetails(true)"
        >learn more</UiButtonArrow
      >
    </div>
  </div>
  <UiModal
    v-model="isModalDetails"
    isBtnClose
    :ui="{ container: 'items-center', width: '!max-w-[1480px]' }"
    @closeModal="switchModalDetails(false)"
  >
    <div class="flex flex-col gap-[15px] pb-[20px] md:flex-row xl:gap-[20px]">
      <img class="md:w-full md:max-w-[555px]" :src="useBaseUrl(item?.image)" />
      <div class="mt-[15px] lg:mt-0">
        <h3 class="text-[20px] uppercase text-black md:text-[30px] xl:text-[45px]">
          {{ item.title }}
        </h3>
        <p
          class="mt-[5px] text-[10px] leading-[130%] text-black md:mt-[10px] md:text-[14px] xl:mt-[20px] xl:text-[20px]"
        >
          {{ item.allDescription }}
        </p>
      </div>
    </div>
  </UiModal>
</template>

<style scoped>
  .custom_bg {
    background-color: rgba(217, 217, 217, 0.3);
  }
</style>
