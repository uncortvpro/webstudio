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
    <div v-show="isShowSection" :class="cn('duration_show_section animate-fade-down')">
      <div
        class="container flex flex-col flex-wrap items-center md:flex-row md:justify-between xl:flex-nowrap xl:justify-start xl:gap-[30px]"
      >
        <CommonMenuList
          class="flex w-full items-center justify-evenly md:basis-60 md:justify-start md:gap-[40px] lg:flex 3xl:gap-[53px]"
        />
        <div class="mt-[25px] text-right md:mt-[0px] xl:flex-1">
          <UiButton
            class="hover_opacity text-[15px] font-medium text-black md:text-[23px] xl:text-[30px]"
            to="tel:+380953437562"
            >+38(095) 343 75 62</UiButton
          >
        </div>
        <ul
          class="mt-[16px] flex basis-full items-center gap-[20px] md:mt-[30px] md:justify-center md:gap-[25px] xl:mt-[0px] xl:basis-auto"
        >
          <li>
            <UiButton class="hover_opacity" to="https://t.me/ocean_script">
              <SvgoTelegram
                class="!h-[25px] !w-[25px] text-black md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
              />
            </UiButton>
          </li>
          <li>
            <UiButton class="hover_opacity" to="https://api.whatsapp.com/send?phone=380953437562">
              <SvgoWhatsapp
                class="!h-[25px] !w-[25px] text-black md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
              />
            </UiButton>
          </li>
          <li>
            <UiButton class="hover_opacity" to="viber://chat?number=%2B4380953437562">
              <SvgoViber
                class="!h-[25px] !w-[25px] text-black md:!w-[30px] xl:!h-[36px] xl:!w-[36px]"
              />
            </UiButton>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
