<script setup lang="ts">
  const token = '6777974995:AAHSzPhoJ4BeQxUFooIEEjOD3UjINRcO6s4';
  const chatId = 550786351;
  const inputs = ref({
    name: '',
    phone: '',
    email: '',
    service: '',
  });
  const messageSuccess = ref('');

  const message = computed(
    () =>
      `Имя: ${inputs.value.name}
      \nТелефон: ${inputs.value.phone}
      \nEmail: ${inputs.value.email}
      \nУслуга: ${inputs.value.service}`
  );

  const sendMessage = () => {
    $fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message.value}`,
      {
        method: 'POST',
      }
    ).then(() => {
      messageSuccess.value = "Thank you, we'll be in touch!";
      inputs.value.email = '';
      inputs.value.name = '';
      inputs.value.phone = '';
      inputs.value.service = '';
    });
  };
</script>

<template>
  <div
    class="max-w-[485px] rounded-[25px] bg-[rgba(0,10,255,0.5)] px-[15px] py-[25px] md:px-[32px] md:py-[30px] xl:max-w-[779px] xl:rounded-[50px] xl:px-[92px] xl:py-[45px]"
  >
    <form action="#" class="flex flex-col" @submit.prevent="sendMessage">
      <h5
        class="text-center font-secondary text-[22px] font-semibold lowercase text-white md:text-[32px] xl:text-[40px]"
      >
        Contact us today!
      </h5>
      <div class="mt-[20px] flex flex-col gap-[15px] md:mt-[25px] xl:mt-[44px] xl:gap-[20px]">
        <UiInputPrimary v-model="inputs.name" required placeholder="Your name" />
        <UiInputPrimary v-model="inputs.phone" required placeholder="Your pnone number" />
        <UiInputPrimary v-model="inputs.email" required placeholder="Your email" type="email" />
        <UiSelect
          v-model="inputs.service"
          :currentValue="inputs.service"
          :options="['Web-Development', 'UX/UI Design', 'presentation Design']"
          placeholder="service you’re interested in"
        />
      </div>
      <p v-if="messageSuccess" class="input_primary_text text-green-600">{{ messageSuccess }}</p>
      <UiButtonPrimary type="submit" class="mt-[25px] self-center md:mt-[30px] xl:mt-[50px]"
        >send</UiButtonPrimary
      >
    </form>
  </div>
</template>

<style scoped></style>
