<script setup lang="ts">
  const tabs = [
    {
      id: 1,
      label: 'all projects',
      content: 'This is the content shown for Tab1',
    },
    {
      id: 2,
      label: 'Web-development',
      content: 'And, this is the content for Tab2',
    },
    {
      id: 3,
      label: 'Ux/ui design',
      content: 'Finally, this is the content for Tab3',
    },
    {
      id: 4,
      label: 'presentation design',
      content: 'Finally, this is the content for Tab3',
    },
  ];

  const activeTadId = ref(1);
  const activeTab = computed(() => tabs.find((el) => el.id === activeTadId.value));

  const changeTab = (tabId: number) => {
    activeTadId.value = tabId;
  };
</script>

<template>
  <UiSection class="relative bg-black">
    <template #title> best projects </template>
    <template #content>
      <div class="gradient_bg absolute left-[0] top-[0] h-[calc(100%+500px)] w-full" />
      <div class="relative z-10">
        <Swiper
          class="swiper_main w-full"
          :slides-per-view="'auto'"
          :spaceBetween="10"
          :breakpoints="{
            375: {
              spaceBetween: 10,
            },
            768: {
              spaceBetween: 15,
            },
            1300: {
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide
            v-for="(tab, index) in tabs"
            :key="index"
            class="!w-fit overflow-hidden rounded-[5px]"
          >
            <UiButton
              :class="
                cn(
                  'w-fit rounded-[50px] border border-blue px-[16px] py-[5px] text-[10px] lowercase text-white duration-200 md:px-[22px] md:py-[10px] md:text-[16px] xl:border-[2px] xl:px-[43px] xl:py-[11px] xl:text-[25px]',
                  {
                    'bg-blue': activeTadId === tab.id,
                  }
                )
              "
              @click="changeTab(tab.id)"
              >{{ tab.label }}</UiButton
            >
          </SwiperSlide>
        </Swiper>
        <div
          class="mt-[15px] grid auto-rows-[minmax(0,30%)] grid-cols-1 gap-[10px] text-white md:mt-[20px] md:auto-rows-[minmax(0,20vw)] md:grid-cols-12 md:gap-[13px] xl:mt-[38px] xl:gap-[30px] 4xl:auto-rows-[minmax(0,550px)]"
        >
          <div
            class="overflow-hidden rounded-[25px] md:col-span-5 md:rounded-[20px] xl:rounded-[50px]"
          >
            <img class="size-full object-cover" src="@img/olimpia_crm.png" alt="" />
          </div>
          <div
            class="overflow-hidden rounded-[25px] md:col-span-7 md:rounded-[20px] xl:rounded-[50px]"
          >
            <img class="size-full object-cover" src="@img/ukrainemart.png" alt="" />
          </div>
          <div
            class="overflow-hidden rounded-[25px] md:col-span-7 md:rounded-[20px] xl:rounded-[50px]"
          >
            <img class="size-full object-cover" src="@img/size_crm.png" alt="" />
          </div>
          <div
            class="overflow-hidden rounded-[25px] md:col-span-5 md:rounded-[20px] xl:rounded-[50px]"
          >
            <img class="size-full object-cover" src="@img/kuzka_shop.png" alt="" />
          </div>
        </div>
      </div>
    </template>
  </UiSection>
</template>

<style scoped>
  .gradient_bg {
    background: radial-gradient(at 78% 71%, #d63fff -29%, transparent 45%),
      radial-gradient(at 64% 57%, #000aff -1%, transparent 38%),
      radial-gradient(at 82% 48%, #fff501 -29%, transparent 38%);
    opacity: 0.5;
  }
</style>
