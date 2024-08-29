<script setup lang="ts">
  defineProps<{
    news: News;
  }>();

  const isModalDetails = ref(false);
  const switchModalDetails = (value: boolean) => {
    isModalDetails.value = value;
  };
</script>

<template>
  <UiButton class="flex flex-col items-stretch justify-between" @click="switchModalDetails(true)">
    <div class="flex flex-col items-stretch">
      <div class="relative pt-[65%]">
        <img
          class="absolute left-0 top-0 size-full rounded-[20px]"
          loading="lazy"
          :src="useBaseUrl(news?.image)"
        />
      </div>
      <h3
        class="mt-[15px] text-left text-[15px] text-black md:text-[18px] xl:mt-[20px] xl:text-[22px]"
      >
        {{ news.title }}
      </h3>
    </div>
    <UiButton
      class="hover_opacity mt-[10px] flex items-center gap-[10px] self-end md:mt-[30px] xl:mt-[75px] xl:gap-[15px]"
    >
      <span class="text-[12px] uppercase text-black md:text-[18px] xl:text-[23px]">learn more</span>
      <SvgoArrowSecond class="!w-[clamp(26px,5vw,40px)] stroke-black stroke-[2px]" />
    </UiButton>
  </UiButton>
  <UiModal
    v-model="isModalDetails"
    isBtnClose
    :ui="{ container: 'items-center', width: '!max-w-[1480px]' }"
    @closeModal="switchModalDetails(false)"
  >
    <div class="flex flex-col gap-[15px] pb-[20px] md:flex-row xl:gap-[20px]">
      <img class="md:w-full md:max-w-[555px]" :src="useBaseUrl(news?.image)" />
      <!-- <div class="relative pt-[15%] md:pl-[25%] md:max-w-[555px]">
        <img
          class="absolute left-0 top-0 size-full rounded-[20px]"
          loading="lazy"
          :src="useBaseUrl(news?.image)"
        />
      </div> -->
      <div class="mt-[15px] lg:mt-0">
        <h3 class="text-[20px] uppercase text-black md:text-[30px] xl:text-[45px]">
          {{ news.title }}
        </h3>
        <p
          class="mt-[5px] text-[10px] leading-[130%] text-black md:mt-[10px] md:text-[14px] xl:mt-[20px] xl:text-[20px]"
        >
          {{ news.description }}
        </p>
      </div>
    </div>
  </UiModal>
</template>

<style scoped></style>
