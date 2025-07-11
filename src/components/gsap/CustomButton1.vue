<template>
  <div class="q-pa-md flex flex-center column">
    <div
      ref="boxRef"
      class="bg-primary text-white q-pa-lg q-mb-md rounded-borders cursor-pointer"
      @click="animateBox"
    >
      <q-btn :label="botaoPulante" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';

const boxRef = ref<HTMLElement | null>(null)
const { t } = useI18n();

const animateBox = () => {
  if (boxRef.value) {
    gsap.to(boxRef.value, {
      duration: 0.8,
      x: 100,
      rotation: 360,
      scale: 1.2,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    })
  }
}

onMounted(() => {
  if (boxRef.value) {
    gsap.from(boxRef.value, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'bounce.out'
    })
  }
})
</script>
