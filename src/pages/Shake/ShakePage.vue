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
        { opacity: 1, duration: 1, ease: 'power1.inOut', rotateX: 0, rotateY: 0, rotateZ: 0, rotate: 0 },
        { opacity: 1, duration: 1, ease: 'power1.inOut', rotateX: -15, rotateY: 0, rotateZ: 0, rotate: -15 },
        { opacity: 1, duration: 1, ease: 'power1.inOut', rotateX: 15, rotateY: 0, rotateZ: 0, rotate: 15 },
      ],
      repeat: 4
    })
  }
})

</script>
