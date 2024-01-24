<script setup lang="ts">
  const reviews: any[] = [
    {
      name: 'Emily Thompson',
      review:
        "I couldn't be happier with the website that Johnson Web Studios created for my online boutique. They truly understood my vision and translated it into a stunning, user-friendly site. The team was professional, responsive, and delivered beyond my expectations. I highly recommend Johnson Web Studios for anyone looking for top-notch web development",
    },
    {
      name: 'Andrew Davis',
      review:
        'Working with Smith Design Co. was a fantastic experience. From the initial consultation to the final launch, their team demonstrated creativity, technical expertise, and a keen attention to detail. The website they built for my consulting business not only looks sleek but also functions seamlessly. I appreciate their dedication to delivering a product that aligns perfectly with my brand.',
    },
    {
      name: 'Olivia Carter',
      review:
        'Hats off to Miller Web Solutions for bringing my e-commerce vision to life! The team was not only professional and knowledgeable but also incredibly patient with my numerous requests. They were attentive to every detail and offered valuable insights throughout the development process. The result? A visually appealing and high-performing website that has significantly boosted my online sales.',
    },
    {
      name: 'Liam Johnson',
      review:
        "I approached Thompson Web Designs with a complex project, and I'm thoroughly impressed with the outcome. Their technical prowess and problem-solving skills were evident from the start. The communication was excellent, and they went above and beyond to meet tight deadlines. Thompson Web Designs is my go-to recommendation for anyone seeking a reliable and skilled web development partner.",
    },
    {
      name: 'Ella Reynolds',
      review:
        "Harrison Creative Studios turned my concept into a digital masterpiece. Their team's creativity and innovation shine through in every aspect of my website. Not only did they deliver a visually stunning site, but they also ensured it was highly functional and easy to navigate. I'm grateful for their commitment to excellence and the positive impact it's had on my online presence.",
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
          <SwiperSlide v-for="(review, index) in reviews" :key="index" class=" self-stretch">
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
