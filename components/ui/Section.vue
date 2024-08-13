<script setup lang="ts"></script>

<template>
  <section>
    <div class="container">
      <div
        class="mb-[20px] flex items-center gap-[10px] md:mb-[25px] md:gap-[12px] xl:mb-[35px] xl:gap-[15px]"
      >
        <h2
          class="font-secondary text-[20px] font-semibold lowercase text-white md:text-[30px] xl:text-[45px]"
        >
          <slot name="title" />
        </h2>
        <SvgoMain class="!h-[8%] min-h-[14px] !w-[8%] min-w-[53px]" />
      </div>
      <slot name="content" />
    </div>
  </section>
</template>

<style scoped></style>
