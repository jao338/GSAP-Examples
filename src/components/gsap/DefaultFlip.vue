<template>
  <div class="row q-col-gutter-xl q-mb-xl">
    <div ref="flipInX" class="flex justify-center items-center q-pa-xl text-white col-12">
      <q-btn :label="t('flipInX')" color="blue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnimations } from 'src/composables/useAnimations'
import { useI18n } from 'vue-i18n';

const { animate } = useAnimations();
const { t } = useI18n();

const flipInX = ref<HTMLElement | null>(null);

onMounted(() => {
  if (flipInX.value) {
    animate(flipInX.value, 'flipInX');
  }
})
</script>
