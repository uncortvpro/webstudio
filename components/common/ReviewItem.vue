<script setup lang="ts">
  defineProps<{
    review: any;
  }>();
</script>

<template>
  <div
    class="flex flex-col justify-between rounded-[25px] bg-[rgba(0,10,255,0.3)] p-[20px] md:p-[25px] xl:rounded-[50px] xl:px-[32px] xl:py-[46px]"
  >
    <div>
      <h5 class="text-[15px] font-medium text-white md:text-[23px] xl:text-[30px]">
        {{ review.name }}
      </h5>
      <p
        class="mt-[15px] text-[12px] leading-[150%] text-white md:mt-[5px] md:text-[20px] xl:mt-[13px] xl:text-[25px]"
      >
        {{ review.review }}
      </p>
    </div>
    <div class="mt-[39px] flex items-center gap-[10px] md:mt-[80px] xl:mt-[68px]">
      <SvgoStar
        class="!h-[6vw] max-h-[25px] !w-[6vw] max-w-[25px] text-[#FFF500] md:max-h-[35px] md:max-w-[35px]"
      />
      <SvgoStar
        class="!h-[6vw] max-h-[25px] !w-[6vw] max-w-[25px] text-[#FFF500] md:max-h-[35px] md:max-w-[35px]"
      />
      <SvgoStar
        class="!h-[6vw] max-h-[25px] !w-[6vw] max-w-[25px] text-[#FFF500] md:max-h-[35px] md:max-w-[35px]"
      />
      <SvgoStar
        class="!h-[6vw] max-h-[25px] !w-[6vw] max-w-[25px] text-[#FFF500] md:max-h-[35px] md:max-w-[35px]"
      />
      <SvgoStar
        class="!h-[6vw] max-h-[25px] !w-[6vw] max-w-[25px] text-[#FFF500] md:max-h-[35px] md:max-w-[35px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
