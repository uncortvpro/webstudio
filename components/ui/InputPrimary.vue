<script setup lang="ts">
  const props = defineProps<{
    modelValue?: any;
    placeholder?: string;
    required?: boolean;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };

  const concatPlaceholder = computed(
    () => (props.placeholder ? props.placeholder : '') + (props.required ? '  *' : '')
  );
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="concatPlaceholder"
    type="text"
    :required="required"
    class="input_primary_style"
    @input="handleInput"
  />
</template>

<style scoped></style>
