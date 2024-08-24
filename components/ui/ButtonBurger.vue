<script setup lang="ts">
  defineProps<{
    isActive: boolean;
  }>();
</script>

<template>
  <button>
    <div :class="{ 'tham-active': isActive }" class="tham tham-e-slider tham-w-6">
      <div class="tham-box">
        <div
          :class="
            cn('tham-inner bg-black ', {
              'bg-white': isActive,
            })
          "
        />
      </div>
    </div>
  </button>
</template>

<style scoped></style>
