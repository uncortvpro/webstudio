<script setup lang="ts">
  const props = defineProps<{
    projects: Projects[];
  }>();

  const activeTadId = ref(2);
  const activeTab = computed(() => props.projects.find((el) => el.id === activeTadId.value));

  const changeTab = (tabId: number) => {
    activeTadId.value = tabId;
  };

  function checkIndexProject(index: number) {
    const mod = index % 6;
    return mod === 1 || mod === 2 || mod === 5 || mod === 6;
  }
</script>

<template>
  <div>
    <div class="3xl:container">
      <Swiper
        class="swiper_tabs_button w-full"
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
          v-for="(tab, index) in projects"
          :key="index"
          class="!w-fit overflow-hidden rounded-[5px]"
        >
          <UiButton
            :class="
              cn(
                'w-fit rounded-[50px] border border-black px-[16px] py-[5px] text-[10px] lowercase text-black duration-200 md:px-[22px] md:py-[10px] md:text-[16px] xl:border-[2px] xl:px-[43px] xl:py-[11px] xl:text-[25px]',
                {
                  'bg-black text-white': activeTadId === tab.id,
                }
              )
            "
            @click="changeTab(tab.id)"
            >{{ tab.label }}</UiButton
          >
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="container relative z-10">
      <div
        :key="activeTadId"
        class="mt-[15px] grid animate-fade-up auto-rows-[minmax(0,30%)] grid-cols-1 gap-[10px] text-white md:mt-[20px] md:auto-rows-[minmax(0,37vw)] md:grid-cols-12 md:gap-[13px] xl:mt-[38px] xl:gap-[30px] 4xl:auto-rows-[minmax(0,550px)]"
      >
        <div
          v-for="(project, index) in activeTab?.projects"
          :key="index"
          :class="
            cn(
              'group relative overflow-hidden  rounded-[25px] text-black md:col-span-5 md:rounded-[20px] xl:rounded-[50px]',
              {
                'md:!col-span-7': checkIndexProject(index) && activeTab?.projects.length !== 3,
                'md:!col-span-12': activeTab?.projects.length === 3 && index === 0,
                'md:!col-span-6': activeTab?.projects.length === 3 && (index === 1 || index === 2),
                'cursor-pointer': project?.link,
              }
            )
          "
        >
          <UiButton
            :to="project?.link"
            class="absolute left-0 top-0 flex size-full items-end justify-end bg-[linear-gradient(to_bottom,transparent_10%,#000000_100%)] px-[2rem] py-[1.5rem] opacity-0 duration-[0.5s] group-hover:opacity-100"
          >
            <div
              class="flex translate-y-[150%] items-center gap-[10px] text-[18px] font-medium text-white duration-[0.5s] group-hover:translate-y-[0%] xl:gap-[15px] xl:text-[25px]"
            >
              <span>learn more</span>
              <span
                class="flex size-[40px] items-center justify-center rounded-[50%] bg-white md:size-[50px] xl:size-[40px] 3xl:size-[85px]"
              >
                <SvgoArrow class="!size-[50%] stroke-black stroke-[2px]" />
              </span>
            </div>
          </UiButton>

          <!-- <UiButton
                v-if="project?.link"
                class="absolute left-0 top-0 z-10 size-full"
                :to="project?.link"
              /> -->
          <img
            class="size-full object-cover object-top"
            loading="lazy"
            :src="project.image"
            :alt="project?.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
