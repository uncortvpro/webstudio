<script setup lang="ts">
  const contactSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(contactSection, isShowSection);
</script>

<template>
  <div ref="contactSection" :class="{ min_height_animate_sec: !isShowSection }">
    <div
      v-show="isShowSection"
      class="duration_show_section container flex animate-fade-up flex-col gap-[70px] xl:flex-row xl:items-center xl:justify-between"
    >
      <div class="relative self-start xl:self-center">
        <SvgoCustomVector
          class="absolute left-[50%] top-[50%] !h-[200%] !w-auto translate-x-[-50%] translate-y-[-50%] stroke-blue text-transparent"
        />
        <h3
          class="font-secondary text-[25px] font-semibold lowercase text-white md:text-[38px] xl:text-[35px] 3xl:text-[60px]"
        >
          Have a question?
        </h3>
        <p
          class="mt-[5px] text-[15px] lowercase text-white md:mt-[10px] md:text-[23px] xl:text-[25px] 3xl:text-[35px]"
        >
          Let's discuss your tasks.
        </p>
      </div>
      <CommonFormContact class="w-full self-center" />
    </div>
  </div>
</template>

<style scoped></style>
