<script setup lang="ts">
  const { yearsOfExperience } = useData();
</script>

<template>
  <div class="flex items-center gap-[28px] md:gap-[40px] 3xl:gap-[140px]">
    <div>
      <p class="text-[45px] font-medium text-black md:text-[72px] 3xl:text-[100px]">
        {{ yearsOfExperience }}+
      </p>
      <p class="mt-[10px] text-[10px] text-black md:text-[16px] xl:mt-[15px] xl:text-[20px]">
        {{ $t('labels.yearsOfExperience') }}
      </p>
    </div>
    <div>
      <p class="text-[45px] font-medium text-black md:text-[72px] 3xl:text-[100px]">100+</p>
      <p class="mt-[10px] text-[10px] text-black md:text-[16px] xl:mt-[15px] xl:text-[20px]">
        {{ $t('labels.successfulCases') }}
      </p>
    </div>
    <div>
      <p class="text-[45px] font-medium text-black md:text-[72px] 3xl:text-[100px]">8</p>
      <p class="mt-[10px] text-[10px] text-black md:text-[16px] xl:mt-[15px] xl:text-[20px]">
        {{ $t('labels.professionals') }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
