<template>
  <PageGeneric class="row items-center justify-center q-px-xl">
    <div class="col-1 text-h3 text-center" ref="flip">{{ t('flip') }}</div>
    <div class="col-12 row justify-center items-center">
      <div class="col-6 text-h6 text-center">{{ t('flipInfo') }}</div>
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

const flip = ref<HTMLElement | null>(null);

onMounted(() => {
  if (flip.value) {
    animate(flip.value, null, {
      steps: [
        { rotationX: 0, opacity: 0.2, color: '#2747b0', duration: 1, scale: .5, ease: 'sine.in' },
        { rotationX: 180, scale: 1, color: '#ffb300', duration: 1.5, ease: 'sine.in' },
        { rotationX: -360, scale: 2, color: '#2747b0', duration: 2, ease: 'sine.in' },
        { rotationX: 180, scale: 1, color: '#ffb300', duration: 1.5, ease: 'sine.in' },
        { rotationX: 0, opacity: 0.2, color: '#2747b0', duration: 1, scale: .5, ease: 'sine.in' },
      ],
      repeat: 3
    })
  }
})

</script>
