<script setup lang="ts"></script>

<template>
  <div class="relative flex flex-col overflow-hidden pb-[60px] md:pb-[70px] 4xl:pb-[86px]">
    <CommonAnimateRainCode />
    <div class="gradient_bg absolute left-0 top-0 size-full" />
    <div class="gradient_bg_black absolute left-0 top-0 size-full" />
    <div class="container z-10 flex flex-1 flex-col">
      <LayoutHeader />
      <div class="grid grid-cols-1 lg:grid-cols-6">
        <div class="max-w-[1179px] lg:col-span-4">
          <ClientOnly>
            <p
              class="animate_print_text mt-[15px] text-[12px] text-white md:mt-[30px] md:text-[20px] 4xl:mt-[50px] 4xl:text-[25px]"
            >
              Web agency Ocean Script
            </p>
          </ClientOnly>
          <h2
            class="mt-[10px] text-[30px] font-semibold leading-[120%] text-white md:mt-[15px] md:text-[50px] 3xl:text-[75px] 4xl:mt-[20px]"
          >
            Transforming Ideas into Digital Marvels:
          </h2>
          <h2
            class="font-secondary text-[30px] font-semibold leading-[120%] text-blue md:text-[50px] 4xl:text-[75px]"
          >
            Your Vision, Our Code
          </h2>
          <UiButtonPrimary
            to="#services"
            class="mt-[20px] inline-block rounded px-4 py-2 font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:mt-[40px] 3xl:mt-[35px]"
          >
            go to services
          </UiButtonPrimary>
        </div>
        <div class="mt-[35px] flex flex-col sm:mt-[-5%] lg:col-span-2 lg:mt-auto">
          <img
            class="ml-[-10%] block w-[50vw] min-w-[110vw] blur-sm sm:mr-[-10%] sm:w-full sm:min-w-[auto] sm:max-w-[634px] sm:self-end lg:mr-[-50%] lg:w-[45vw] xl:absolute xl:inset-y-0 xl:right-[-20%] xl:my-auto xl:mr-auto xl:w-full xl:max-w-[900px] 4xl:absolute 4xl:inset-y-0 4xl:right-[-20%] 4xl:my-auto 4xl:mr-auto 4xl:w-full 4xl:max-w-[1115px]"
            src="@img/main_element.png"
            alt=""
          />
        </div>
        <CommonOurAdvances class="mt-[15px] lg:col-span-6 lg:mt-[85px] 4xl:mt-[90px]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
