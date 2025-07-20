<template>
  <PageGeneric class="row items-center justify-center q-px-xl">
    <div class="col-1 text-h3 text-center" ref="shake">{{ t('shake') }}</div>
    <div class="col-12 row justify-center items-center">
      <div class="col-6 text-h6 text-center">{{ t('shakeInfo') }}</div>
    </div>
  </PageGeneric>
</template>

<script setup lang="ts">
import PageGeneric from 'components/util/PageGeneric.vue';

import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import { useAnimations } from 'src/composables/useAnimations';

const { animate } = useAnimations();

const { t } = useI18n();

const shake = ref<HTMLElement | null>(null);

onMounted(() => {
  if (shake.value) {
    animate(shake.value, null, {
      steps: [
        { color: 'green', scale: 1.05, rotationX: 10, rotationY: -10, rotationZ: 5, duration: 0.15, ease: 'sine.inOut' },
        { color: 'green', scale: 1.1, rotationX: -15, rotationY: 15, rotationZ: -5, duration: 0.15, ease: 'sine.inOut' },
        { color: 'green', scale: 1.08, rotationX: 20, rotationY: -20, rotationZ: 10, duration: 0.15, ease: 'sine.inOut' },
        { color: 'green', scale: 1.05, rotationX: -10, rotationY: 10, rotationZ: -10, duration: 0.15, ease: 'sine.inOut' },
        { color: 'green', scale: 1.1, rotationX: 5, rotationY: -5, rotationZ: 5, duration: 0.15, ease: 'sine.inOut' },
        { color: 'green', scale: 1.03, rotationX: -5, rotationY: 5, rotationZ: -5, duration: 0.15, ease: 'sine.inOut' },
        { color: 'green', scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0.25, ease: 'sine.out' }
      ],
      repeat: 4
    });
  }
});

</script>
