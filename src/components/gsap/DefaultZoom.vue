<template>
  <div class="row q-col-gutter-xl q-mb-xl no-overflow">
    <div ref="zoomOut" class="flex justify-center items-center q-pa-xl text-white col-6">
      <q-btn :label="t('zoomOut')" color="blue" />
    </div>
    <div ref="zoomIn" class="flex justify-center items-center q-pa-xl text-white col-6">
      <q-btn :label="t('zoomIn')" color="red" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAnimations } from 'src/composables/useAnimations';
import { useI18n } from 'vue-i18n';

const { animate } = useAnimations();
const { t } = useI18n();

const zoomOut = ref<HTMLElement | null>(null);
const zoomIn = ref<HTMLElement | null>(null);

onMounted(() => {
  if (zoomOut.value) {
    animate(zoomOut.value, 'zoomOut', {
      fromVars: { opacity: 0.5, scale: 1 },
      toVars: { opacity: 1, scale: 2, duration: 1.2 }
    }, 'fromTo');
  }
  if (zoomIn.value) {
    animate(zoomIn.value, 'zoomOut', {
      fromVars: { opacity: 1, scale: 1 },
      toVars: { opacity: 0.5, scale: 1, duration: 1.2 }
    }, 'fromTo');
  }
})
</script>
