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
          image: useBaseUrl('/img/ukrainemart_2.png'),
          link: 'https://ukrainemart.com/',
          alt: 'Ukrainemart - web development project'
        },
        {
          image: useBaseUrl('/img/clickwerk.jpg'),
          link: 'https://clickwerk.eu/',
          alt: 'Clickwerk web development project showcasing responsive design and modern UI'
        },
        {
          image: useBaseUrl('/img/size_crm.png'),
          link: 'https://size-crm.com/',
          alt: 'Size-crm project example demonstrating effective web development solutions'
        },
        {
          image: useBaseUrl('/img/kuzka_shop.png'),
          link: '',
          alt: 'Product Development and Operations Setup'
        },
      ],
    },
    {
      id: 3,
      label: 'Ui/ux design',
      projects: [
        {
          image: useBaseUrl('/img/LogicGov.png'),
          link: '',
          alt: 'UX/UI design mockup showcasing intuitive user interface'
        },
        {
          image: useBaseUrl('/img/Enterprice_gpt.png'),
          link: '',
          alt: 'Interactive user experience design with modern layout'
        },
        {
          image: useBaseUrl('/img/kwiga.png'),
          link: '',
          alt: 'High-fidelity prototype of e-commerce app with user-friendly navigation'
        },
        {
          image: useBaseUrl('/img/CryptoEx.png'),
          link: '',
          alt: 'Modern web design with engaging user interface elements'
        },
      ],
    },
    {
      id: 4,
      label: 'presentation design',
      projects: [
        {
          image: useBaseUrl('/img/pres_1.png'),
          link: '',
          alt: 'Professional presentation design with modern slide layout'
        },
        {
          image: useBaseUrl('/img/size_crm_2.png'),
          link: '',
          alt: 'Size crm visually engaging presentation slide featuring infographic'
        },
        {
          image: useBaseUrl('/img/ukrainemart_2.png'),
          link: '',
          alt: 'Ukrainemart Presentation slide featuring a mix of text and graphics'
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
            :key="activeTadId"
            class="mt-[15px] grid animate-fade-up auto-rows-[minmax(0,30%)] grid-cols-1 gap-[10px] text-white md:mt-[20px] md:auto-rows-[minmax(0,37vw)] md:grid-cols-12 md:gap-[13px] xl:mt-[38px] xl:gap-[30px] 4xl:auto-rows-[minmax(0,550px)]"
          >
            <div
              :class="
                cn(
                  'group relative overflow-hidden rounded-[25px] md:col-span-5 md:rounded-[20px] xl:rounded-[50px]',
                  {
                    'md:!col-span-12': activeTab?.projects.length === 3,
                    'cursor-pointer': activeTab?.projects[0]?.link,
                  }
                )
              "
            >
              <UiButton
                class="absolute left-0 top-0 z-10 h-full w-full"
                :to="activeTab?.projects[0]?.link"
                v-if="activeTab?.projects[0]?.link"
              ></UiButton>
              <img
                class="size-full object-cover object-top duration-hover group-hover:scale-110"
                :src="activeTab?.projects[0].image"
                :alt="activeTab?.projects[0]?.alt"
              />
            </div>
            <div
              :class="
                cn(
                  'group relative overflow-hidden rounded-[25px] md:col-span-7 md:rounded-[20px] xl:rounded-[50px]',
                  {
                    'cursor-pointer': activeTab?.projects[1]?.link,
                  }
                )
              "
            >
              <UiButton
                class="absolute left-0 top-0 z-10 h-full w-full"
                :to="activeTab?.projects[1]?.link"
                v-if="activeTab?.projects[1]?.link"
              ></UiButton>
              <img
                class="size-full object-cover object-top duration-hover group-hover:scale-110"
                :src="activeTab?.projects[1].image"
                :alt="activeTab?.projects[1]?.alt"
              />
            </div>
            <div
              :class="
                cn(
                  'group  relative overflow-hidden rounded-[25px] md:col-span-7 md:rounded-[20px] xl:rounded-[50px]',
                  {
                    'md:!col-span-5': activeTab?.projects.length === 3,
                    'cursor-pointer': activeTab?.projects[2]?.link,
                  }
                )
              "
            >
              <UiButton
                class="absolute left-0 top-0 z-10 h-full w-full"
                :to="activeTab?.projects[2]?.link"
                v-if="activeTab?.projects[2]?.link"
              ></UiButton>
              <img
                class="size-full object-cover object-top duration-hover group-hover:scale-110"
                :src="activeTab?.projects[2].image"
                :alt="activeTab?.projects[2]?.alt"
              />
            </div>
            <div
              v-if="activeTab?.projects[3]"
              :class="
                cn(
                  'group relative overflow-hidden rounded-[25px] md:col-span-5 md:rounded-[20px] xl:rounded-[50px]',
                  {
                    'cursor-pointer': activeTab?.projects[3]?.link,
                  }
                )
              "
            >
              <UiButton
                class="absolute left-0 top-0 z-10 h-full w-full"
                :to="activeTab?.projects[3]?.link"
                v-if="activeTab?.projects[3]?.link"
              ></UiButton>
              <img
                class="size-full object-cover duration-hover group-hover:scale-110"
                :src="activeTab?.projects[3].image"
                :alt="activeTab?.projects[3]?.alt"
              />
            </div>
          </div>
        </div>
      </template>
    </UiSection>
  </div>
</template>

<style scoped></style>
