<template>
  <PageGeneric class="row items-center justify-center q-px-xl">
    <div class="col-1 text-h5 text-center" ref="fade">{{ t('fade') }}</div>
    <div class="col-12 row justify-center items-center">
      <div class="col-6 text-caption text-center">{{ t('fadeInfo') }}</div>
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

const fade = ref<HTMLElement | null>(null);

onMounted(() => {
  if(fade.value){
    animate(fade.value, 'fadeInDown', {
      fromVars: {
        opacity: 0, scale: 1, x: -100, rotate: -35, color: '#aa82e3'
      },
      toVars: {
        opacity: 1, scale: 3, x: 0, ease: 'elastic.out', duration: 10, rotate: 0, color: '#9C27B0'
      }
    }, 'fromTo')
  }
})
</script>
