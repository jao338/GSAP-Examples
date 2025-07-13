<template>
  <div class="row q-col-gutter-xl q-mb-xl">
    <div ref="zoomOut" class="flex justify-center items-center q-pa-xl text-white col-6">
      <q-btn :label="t('zoomOut')" color="blue" />
    </div>
    <div ref="zoomIn" class="flex justify-center items-center q-pa-xl text-white col-6">
      <q-btn :label="t('zoomIn')" color="red" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnimations } from 'src/composables/useAnimations'
import { useI18n } from 'vue-i18n';

const { animate } = useAnimations();
const { t } = useI18n();

const zoomOut = ref<HTMLElement | null>(null);
const zoomIn = ref<HTMLElement | null>(null);

onMounted(() => {
  if (zoomOut.value) {
    animate(zoomOut.value, 'zoomOut');
  }
  if (zoomIn.value) {
    animate(zoomIn.value, 'zoomIn');
  }
})
</script>
