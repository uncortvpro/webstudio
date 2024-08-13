<script setup lang="ts">
  defineProps<{
    modelValue?: any;
    placeholder?: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder ? placeholder : ''"
    type="text"
    class="input_primary_style"
    @input="handleInput"
  />
</template>

<style scoped></style>
