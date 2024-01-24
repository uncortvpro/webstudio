<script setup lang="ts">
  // import { useElementVisibility } from '@vueuse/core';

  const tabs = [
    // {
    //   id: 1,
    //   label: 'all projects',
    //   projects: [
    //     {
    //       image: '/img/olimpia_crm.png',
    //     },
    //     {
    //       image: '/img/olimpia_crm.png',
    //     },
    //     {
    //       image: '/img/olimpia_crm.png',
    //     },
    //     {
    //       image: '/img/olimpia_crm.png',
    //     },
    //   ],
    // },
    {
      id: 2,
      label: 'Web-development',
      projects: [
        {
          image: '/img/olimpia_crm.png',
        },
        {
          image: '/img/ukrainemart.png',
        },
        {
          image: '/img/size_crm.png',
        },
        {
          image: '/img/kuzka_shop.png',
        },
      ],
    },
    {
      id: 3,
      label: 'Ux/ui design',
      projects: [
        {
          image: '/img/LogicGov.png',
        },
        {
          image: '/img/Enterprice_gpt.png',
        },
        {
          image: '/img/kwiga.png',
        },
        {
          image: '/img/CryptoEx.png',
        },
      ],
    },
    {
      id: 4,
      label: 'presentation design',
      projects: [
        {
          image: '/img/pres_1.png',
        },
        {
          image: '/img/size_crm_2.png',
        },
        {
          image: '/img/ukrainemart_2.png',
        },
      ],
    },
  ];

  const activeTadId = ref(2);
  const activeTab = computed(() => tabs.find((el) => el.id === activeTadId.value));
  const bestProjectsSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(bestProjectsSection, isShowSection);

  const changeTab = (tabId: number) => {
    activeTadId.value = tabId;
  };
</script>

<template>
  <div ref="bestProjectsSection" :class="{ min_height_animate_sec: !isShowSection }">
    <UiSection v-show="isShowSection" class="duration_show_section relative animate-fade-up">
      <template #title> best projects </template>
      <template #content>
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
            class="mt-[15px] grid animate-fade-up auto-rows-[minmax(0,30%)] grid-cols-1 gap-[10px] text-white md:mt-[20px] md:auto-rows-[minmax(0,300px)] md:grid-cols-12 md:gap-[13px] xl:mt-[38px] xl:gap-[30px] 4xl:auto-rows-[minmax(0,550px)]"
          >
            <div
              :class="
                cn(
                  'overflow-hidden rounded-[25px] md:col-span-5 md:rounded-[20px] xl:rounded-[50px]',
                  {
                    'md:!col-span-12': activeTab?.projects.length === 3,
                  }
                )
              "
            >
              <img
                class="size-full object-cover object-top"
                :src="activeTab?.projects[0].image"
                alt=""
              />
            </div>
            <div
              :class="
                cn(
                  'overflow-hidden rounded-[25px] md:col-span-7 md:rounded-[20px] xl:rounded-[50px]'
                )
              "
            >
              <img
                class="size-full object-cover object-top"
                :src="activeTab?.projects[1].image"
                alt=""
              />
            </div>
            <div
              :class="
                cn(
                  'overflow-hidden rounded-[25px] md:col-span-7 md:rounded-[20px] xl:rounded-[50px]',
                  {
                    'md:!col-span-5': activeTab?.projects.length === 3,
                  }
                )
              "
            >
              <img class="size-full object-cover object-top" :src="activeTab?.projects[2].image" />
            </div>
            <div
              v-if="activeTab?.projects[3]"
              class="overflow-hidden rounded-[25px] md:col-span-5 md:rounded-[20px] xl:rounded-[50px]"
            >
              <img class="size-full object-cover" :src="activeTab?.projects[3].image" alt="" />
            </div>
          </div>
        </div>
      </template>
    </UiSection>
  </div>
</template>

<style scoped></style>
