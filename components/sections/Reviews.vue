<script setup lang="ts">
  const reviews: any[] = [];
  const reviewsSection = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(reviewsSection, isShowSection);
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
          :class="cn('products_swiper !overflow-x-visible', {})"
          :modules="[SwiperAutoplay, SwiperGrid]"
          :spaceBetween="30"
          :slidesPerView="1"
          :breakpoints="{
            375: {
              slidesPerView: 1,
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
          <SwiperSlide v-for="(review, index) in 10" :key="index" class="self-stretch">
            <CommonReviewItem :review="review" />
          </SwiperSlide>
        </Swiper>
      </template>
    </UiSection>
  </div>
</template>

<style scoped></style>
