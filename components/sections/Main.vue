<script setup lang="ts">
  const mainSection = ref();
  const isShowSection = ref<boolean>(false);

  useAnimateSection(mainSection, isShowSection);
</script>

<template>
  <div
    ref="mainSection"
    class="bg_radial_gradient relative flex flex-col overflow-hidden pb-[60px] md:pb-[70px] xl:pb-[100px]"
  >
    <div class="container z-10 flex flex-1 flex-col">
      <LayoutHeader />
      <div class="grid grid-cols-1 lg:grid-cols-6">
        <div class="max-w-[1179px] lg:col-span-4">
          <p
            class="animate_print_text mt-[15px] text-[12px] text-black md:mt-[30px] md:text-[20px] 4xl:mt-[50px] 4xl:text-[25px]"
          >
            Web agency Ocean Script
          </p>
          <h2
            class="mt-[10px] text-[30px] font-semibold leading-[120%] text-black md:mt-[15px] md:text-[50px] 3xl:text-[75px] 4xl:mt-[20px]"
          >
            Transforming Ideas into Digital Marvels:
          </h2>
          <h2
            class="font-secondary text-[30px] font-semibold leading-[120%] text-[#8D7A64] md:text-[50px] 4xl:text-[75px]"
          >
            Your Vision, Our Code
          </h2>
          <UiButtonPrimary
            to="#services"
            class="mt-[20px] inline-block rounded px-4 py-2 font-bold text-white md:mt-[40px] 3xl:mt-[35px]"
          >
            go to services
          </UiButtonPrimary>
        </div>
        <div
          class="mt-[35px] flex flex-col items-center self-center sm:mt-[-5%] lg:col-span-2 lg:mt-auto"
        >
          <img class="max-w-[400px] lg:max-w-[538px]" src="/img/iPhone15Mockup.webp" alt="" />
        </div>
        <CommonOurAdvances
          :class="
            cn(
              'mt-[15px] translate-x-[10%] opacity-0 duration-[1s] lg:col-span-6 lg:mt-[-100px] xl:mt-[-200px] 2xl:mt-[-300px] 4xl:mt-[-300px]',
              {
                'opacity-1 translate-x-[0%]': isShowSection,
              }
            )
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg_radial_gradient {
    background: radial-gradient(at top right, #9b8b77 -18%, transparent 33%);
  }

  .gradient_bg {
    background: radial-gradient(at top right, #010680, transparent);
  }
  .gradient_bg_black {
    background: linear-gradient(to bottom, transparent 19%, #000000 84%);
  }

  @keyframes flashin-border {
    0% {
      border-color: orange;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: orange;
    }
  }

  @keyframes printed-text {
    from {
      width: 0%;
    }
  }

  .animate_print_text {
    width: 100%;
    overflow: hidden;
    line-height: 130%;
    white-space: nowrap;
    animation:
      printed-text 3s steps(51),
      flashin-border 0.75s step-start infinite;
  }
</style>
