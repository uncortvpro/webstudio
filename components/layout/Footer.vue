<script setup lang="ts"></script>

<template>
  <footer>
    <div
      class="container flex flex-col flex-wrap items-center md:flex-row md:justify-between xl:flex-nowrap xl:justify-start xl:gap-[30px]"
    >
      <CommonMenuList
        class="flex w-full items-center justify-evenly md:basis-60 md:justify-start md:gap-[40px] lg:flex 3xl:gap-[53px]"
      />
      <div class="mt-[25px] text-right md:mt-[0px] xl:flex-1">
        <a
          class="text-[15px] font-medium text-white md:text-[23px] xl:text-[30px]"
          href="tel:+38(096) 123 456 7"
          >+38(096) 123 456 7</a
        >
      </div>
      <ul
        class="mt-[16px] flex basis-full items-center gap-[20px] md:mt-[30px] md:justify-center md:gap-[25px] xl:mt-[0px] xl:basis-auto"
      >
        <li>
          <a href="/">
            <SvgoInstagram
              class="!h-[25px] !w-[25px] text-white md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <SvgoTiktok
              class="!h-[25px] !w-[25px] text-white md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
            />
          </a>
        </li>
        <li>
          <a href="/">
            <SvgoFecebook
              class="!h-[25px] !w-[25px] text-white md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped></style>
