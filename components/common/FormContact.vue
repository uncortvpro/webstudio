<script setup lang="ts"></script>

<template>
  <div
    class="max-w-[485px] rounded-[25px] bg-[rgba(0,10,255,0.5)] px-[15px] py-[25px] md:px-[32px] md:py-[30px] xl:max-w-[779px] xl:rounded-[50px] xl:px-[92px] xl:py-[45px]"
  >
    <form action="#" class="flex flex-col">
      <h5
        class="text-center font-secondary text-[22px] font-semibold lowercase text-white md:text-[32px] xl:text-[40px]"
      >
        Contact us today!
      </h5>
      <div class="mt-[20px] flex flex-col gap-[15px] md:mt-[25px] xl:mt-[44px] xl:gap-[20px]">
        <UiInputPrimary placeholder="Your name" />
        <UiInputPrimary placeholder="Your pnone number" />
        <UiInputPrimary placeholder="Your email" type="email" />
        <UiSelect
          :options="['Web-Development', 'UX/UI Design', 'presentation Design']"
          placeholder="service you’re interested in"
        />
      </div>
      <UiButtonPrimary class="mt-[25px] self-center md:mt-[30px] xl:mt-[50px]"
        >send</UiButtonPrimary
      >
    </form>
  </div>
</template>

<style scoped></style>
