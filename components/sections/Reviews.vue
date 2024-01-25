<script setup lang="ts">
  const reviews: any[] = [
    {
      name: 'Natalia',
      review:
        "Working with Ocean Script was a game-changer for our business. Their web development expertise brought our online presence to a whole new level. The team's dedication and creativity truly set them apart.",
    },
    {
      name: 'Dmitri',
      review:
        'Impressed with the seamless collaboration and top-notch results delivered by Ocean Script. Their web solutions are not just functional, but they also have an eye for design that adds a touch of elegance to the user experience. Highly recommended!',
    },
    {
      name: 'Andrei',
      review:
        'Ocean Script turned our vision into reality with their impeccable web development skills. The team was responsive, professional, and went above and beyond to ensure our website exceeded expectations. A reliable partner for any online venture.',
    },
    {
      name: 'Aleksander',
      review:
        'Partnering with Ocean Script was a breeze from start to finish. Their expertise in web development is matched by their commitment to client satisfaction. Our website is now a powerful tool thanks to their innovative approach and attention to detail.',
    },
    {
      name: 'Jaroslav',
      review:
        'Thrilled with the results of our collaboration with Ocean Script. Their web development team demonstrated a deep understanding of our industry, translating complex ideas into a user-friendly website. Their professionalism and commitment to quality are commendable.',
    },
  ];
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
          <SwiperSlide v-for="(review, index) in reviews" :key="index" class="self-stretch">
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
