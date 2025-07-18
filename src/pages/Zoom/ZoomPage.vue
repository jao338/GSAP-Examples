<template>
  <PageGeneric class="row items-center justify-center q-px-xl">
    <div class="col-1 text-h3 text-center" ref="zoom">{{ t('zoom') }}</div>
    <div class="col-12 row justify-center items-center">
      <div class="col-6 text-h6 text-center">{{ t('zoomInfo') }}</div>
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

const zoom = ref<HTMLElement | null>(null);

onMounted(() => {
  if(zoom.value){
    animate(zoom.value, 'zoomOut', {
      fromVars: {
        opacity: 0.2, scale: .2, rotation: 0, color: '#82ace3'
      },
      toVars: {
        opacity: 1, scale: 3, ease: 'back.out', duration: 5, color: '#2747b0', rotation: -359
      }
    }, 'fromTo')
  }
})
</script>
