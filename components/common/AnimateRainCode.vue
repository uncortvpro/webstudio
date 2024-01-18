<!-- eslint-disable no-plusplus -->
<script setup lang="ts">
  const canvas = ref<any>(null);
  const ctx = ref<any>(null);

  const letters = '01';
  const fontSize = 20;
  const columns = window.innerWidth / fontSize;
  const drops = Array.from({ length: columns }, () =>
    Math.floor(Math.random() * window.innerHeight)
  );

  const draw = () => {
    if (!canvas.value || !ctx.value) return;

    ctx.value.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height);

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];

      // Устанавливаем размер шрифта
      ctx.value.font = `${fontSize}px Arial`;

      ctx.value.fillStyle = '#202267';
      ctx.value.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;

      if (drops[i] * fontSize > canvas.value.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  };

  const setAnimate = () => {
    if (canvas.value) {
      ctx.value = canvas.value.getContext('2d');
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
      setInterval(draw, 33);
    }
  };

  onMounted(() => {
    setAnimate();
  });
</script>

<template>
  <canvas ref="canvas" class="absolute left-0 top-0 size-full" />
</template>

<style scoped>
  canvas {
    display: block;
  }
</style>
