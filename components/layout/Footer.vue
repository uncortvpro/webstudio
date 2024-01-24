<script setup lang="ts">
  const footer = ref();
  const isShowSection = ref<boolean>(false);
  useAnimateSection(footer, isShowSection);
</script>

<template>
  <footer
    ref="footer"
    :class="{ min_height_animate_sec: !isShowSection }"
    class="pb-[35px] pt-[70px] md:pb-[90px] md:pt-[95px] xl:pb-[116px] xl:pt-[120px]"
  >
    <div
      :class="
        cn('duration_show_section  duration-300', {
          'animate-fade-down': isShowSection,
        })
      "
    >
      <div
        class="container flex flex-col flex-wrap items-center md:flex-row md:justify-between xl:flex-nowrap xl:justify-start xl:gap-[30px]"
      >
        <CommonMenuList
          class="flex w-full items-center justify-evenly md:basis-60 md:justify-start md:gap-[40px] lg:flex 3xl:gap-[53px]"
        />
        <div class="mt-[25px] text-right md:mt-[0px] xl:flex-1">
          <UiButtonOpacity
            class="text-[15px] font-medium text-white md:text-[23px] xl:text-[30px]"
            to="tel:+380500728146"
            >+38(050) 072 81 06</UiButtonOpacity
          >
        </div>
        <ul
          class="mt-[16px] flex basis-full items-center gap-[20px] md:mt-[30px] md:justify-center md:gap-[25px] xl:mt-[0px] xl:basis-auto"
        >
          <li>
            <UiButtonOpacity to="https://t.me/ocean_script">
              <SvgoTelegram
                class="!h-[25px] !w-[25px] text-white md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
              />
            </UiButtonOpacity>
          </li>
          <li>
            <UiButtonOpacity to="https://api.whatsapp.com/send?phone=0953437562">
              <SvgoWhatsapp
                class="!h-[25px] !w-[25px] text-white md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
              />
            </UiButtonOpacity>
          </li>
          <li>
            <UiButtonOpacity to="viber://chat?number=%2B40953437562">
              <SvgoViber
                class="!h-[25px] !w-[25px] text-white md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
              />
            </UiButtonOpacity>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
