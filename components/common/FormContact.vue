<script setup lang="ts">
  const { services } = useData();

  const token = '6777974995:AAHSzPhoJ4BeQxUFooIEEjOD3UjINRcO6s4';
  const chatId = 550786351;
  const inputs = ref({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
  });
  // const messageSuccess = ref('');
  const isModalSuccess = ref(false);

  const servicesOptions = computed(() => services.map((el) => useMultiLang(el, 'title')));

  const message = computed(
    () =>
      `Имя: ${inputs.value.name}
      \nТелефон: ${inputs.value.phone}
      \nEmail: ${inputs.value.email}
      \nУслуга: ${inputs.value.service}
      \nБюджет: ${inputs.value.budget}`
  );

  const sendMessage = () => {
    $fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message.value}`,
      {
        method: 'POST',
      }
    ).then(() => {
      isModalSuccess.value = true;
      inputs.value.email = '';
      inputs.value.name = '';
      inputs.value.phone = '';
      inputs.value.service = '';
      inputs.value.budget = '';
    });
  };
</script>

<template>
  <div
    class="max-w-[485px] rounded-[25px] px-[15px] py-[25px] md:px-[32px] md:py-[30px] xl:max-w-[800px] xl:rounded-[50px] xl:px-[92px] xl:py-[45px]"
  >
    <UiModalSuccess v-model="isModalSuccess" :message="$t('form.thankYou')" />
    <form action="#" class="flex flex-col" @submit.prevent="sendMessage">
      <h5
        class="text-center font-secondary text-[18px] font-semibold lowercase text-black md:text-[23px] xl:text-[28px]"
      >
        {{ $t('formContact.header') }}
      </h5>
      <div class="mt-[20px] flex flex-col gap-[15px] md:mt-[25px] xl:mt-[44px] xl:gap-[20px]">
        <UiInputPrimary
          v-model="inputs.name"
          required
          :placeholder="$t('formContact.placeholder.name')"
        />
        <UiInputPrimary v-model="inputs.phone" :placeholder="$t('formContact.placeholder.phone')" />
        <UiInputPrimary
          v-model="inputs.email"
          required
          :placeholder="$t('formContact.placeholder.email')"
          type="email"
        />
        <UiSelect
          v-model="inputs.service"
          :currentValue="inputs.service"
          :options="servicesOptions"
          :placeholder="$t('formContact.placeholder.service')"
        />
        <UiSelect
          v-model="inputs.budget"
          :currentValue="inputs.budget"
          :options="[
            '$500 - $5,000',
            '$5,000 - $10,000',
            '$10,000 - $25,000',
            '$25,000 - $50,000',
            'Over 50,000$',
          ]"
          :placeholder="$t('formContact.placeholder.budget')"
        />
      </div>
      <UiButtonPrimary
        type="submit"
        class="mt-[25px] self-center lowercase md:mt-[30px] xl:mt-[50px]"
        >{{ $t('labels.send') }}</UiButtonPrimary
      >
    </form>
  </div>
</template>

<style scoped></style>
