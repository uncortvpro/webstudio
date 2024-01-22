<script setup lang="ts">
  const reviews: any[] = [];
</script>

<template>
  <UiSection class="overflow-hidden">
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
</template>

<style scoped></style>
