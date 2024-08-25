<script setup lang="ts">
  const contactSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(contactSection, isShowSection);
</script>

<template>
  <div
    ref="contactSection"
    :class="
      cn('', {
        min_height_animate_sec: !isShowSection,
      })
    "
  >
    <div
      :class="
        cn(
          'duration_show_section relative translate-y-[20%] bg-[rgba(141,122,100,0.1)] pt-[30px] opacity-0 duration-[2s] md:pt-[40px] xl:pt-[70px]',
          {
            'opacity-1 translate-y-[0%]': isShowSection,
          }
        )
      "
    >
      <div
        class="container flex flex-col gap-[70px] xl:flex-row xl:items-center xl:justify-between"
      >
        <div class="relative self-start xl:self-center">
          <SvgoCustomVector
            class="filter_img absolute left-[50%] top-[50%] !h-[200%] !w-auto translate-x-[-50%] translate-y-[-50%] stroke-blue text-transparent"
          />
          <h3
            class="font-secondary text-[25px] font-semibold lowercase text-black md:text-[38px] xl:text-[35px] 3xl:text-[60px]"
          >
            Have a question?
          </h3>
          <p
            class="mt-[5px] text-[15px] lowercase text-black md:mt-[10px] md:text-[23px] xl:text-[25px] 3xl:text-[35px]"
          >
            Let's discuss your tasks.
          </p>
        </div>
        <CommonFormContact class="w-full self-center" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .filter_img {
    filter: brightness(90%) sepia(100%) hue-rotate(0deg) saturate(0) opacity(100%);
  }
</style>
