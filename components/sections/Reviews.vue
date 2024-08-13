<script setup lang="ts">
  const { reviews } = useData();
  const reviewsSection = ref<HTMLElement | null>(null);
  const isShowSection = ref<boolean>(false);
  const updateKeys = ref<Map<number, number>>(new Map());

  useAnimateSection(reviewsSection, isShowSection);

  // Watch for changes in isShowSection
  watch(isShowSection, async (newValue) => {
    if (newValue) {
      await nextTick();
      reviews.forEach((_, index) => {
        updateKeys.value.set(index, Date.now());
      });
    }
  });
</script>

<template>
  <div ref="reviewsSection" :class="{ min_height_animate_sec: !isShowSection }">
    <UiSection
      v-show="isShowSection"
      class="duration_show_section animate-fade-right overflow-hidden"
    >
      <template #title> reviews </template>
      <template #content>
        <Swiper
          :class="cn('products_swiper reviews_swiper !overflow-x-visible', {})"
          :modules="[SwiperAutoplay, SwiperGrid]"
          :spaceBetween="30"
          :centered-slides-bounds="true"
          :centered-slides="true"
          :slidesPerView="1.2"
          :breakpoints="{
            375: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1600: {
              slidesPerView: 3,
            },
          }"
          :fill="'column'"
          :rows="2"
        >
          <SwiperSlide
            v-for="(review, index) in reviews"
            :key="updateKeys.get(index) || index"
            :class="cn('self-stretch', {})"
          >
            <CommonReviewItem :review="review" class="!h-full" />
          </SwiperSlide>
        </Swiper>
      </template>
    </UiSection>
  </div>
</template>

<style>
  .reviews_swiper .swiper-slide {
    @apply h-auto;
  }
</style>
