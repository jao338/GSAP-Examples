<template>
  <PageGeneric class="row items-center justify-center q-px-xl">
    <div class="col-1 text-h3 text-center" ref="pulse">{{ t('pulse') }}</div>
    <div class="col-12 row justify-center items-center">
      <div class="col-6 text-h6 text-center">{{ t('pulseInfo') }}</div>
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

const pulse = ref<HTMLElement | null>(null);

onMounted(() => {
  if (pulse.value) {
    animate(pulse.value, null, {
      steps: [
        { color: 'red', opacity: 0.2, scale: 0.5, rotate: -4, duration: 0.3, ease: 'sine.inOut' },
        { color: 'red', opacity: 0.4, scale: 0.75, rotate: 4, duration: 0.3, ease: 'sine.inOut' },
        { color: 'red', opacity: 0.6, scale: 0.9, rotate: -2, duration: 0.3, ease: 'sine.inOut' },
        { color: 'red', opacity: 0.8, scale: 1.1, rotate: 2, duration: 0.3, ease: 'sine.inOut' },
        { color: 'red', opacity: 0.9, scale: 0.95, rotate: -1, duration: 0.3, ease: 'sine.inOut' },
        { color: 'red', opacity: 1, scale: 1.05, rotate: 1, duration: 0.3, ease: 'sine.inOut' },
        { color: 'red', opacity: 1, scale: 1.02, rotate: 0.5, duration: 0.3, ease: 'sine.inOut' },
        { color: 'red', opacity: 1, scale: 1, rotate: 0, duration: 0.5, ease: 'sine.out' }
      ],
      repeat: 4
    })
  }
})

</script>
