<template>
  <div class="row q-col-gutter-xl q-mb-xl">
    <div ref="shake" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('shake')" color="blue" />
    </div>
    <div ref="shakeX" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('shakeX')" color="blue" />
    </div>
    <div ref="shakeY" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('shakeY')" color="red" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnimations } from 'src/composables/useAnimations'
import { useI18n } from 'vue-i18n';

const { animate } = useAnimations();
const { t } = useI18n();

const shake = ref<HTMLElement | null>(null);
const shakeX = ref<HTMLElement | null>(null);
const shakeY = ref<HTMLElement | null>(null);

onMounted(() => {
  if (shakeX.value) {
    animate(shakeX.value, 'shakeX');
  }
  if (shakeY.value) {
    animate(shakeY.value, 'shakeY');
  }
  if (shake.value) {
    animate(shake.value, 'shake');
  }
})
</script>
