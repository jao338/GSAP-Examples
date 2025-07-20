<template>
  <PageGeneric class="row items-center justify-center q-px-xl">
    <div class="col-12 text-center">
      <span class="text-h3">{{ t('gsap') }}</span>
    </div>
    <DefaultCarousel :slides="slides" class="row justify-center items-center col-6 bg-blue-1 border-radius">
      <template v-slot:slide-content-0>
        <DefaultZoom class="full-width" />
      </template>
      <template v-slot:slide-content-1>
        <DefaultFade class="full-width" />
      </template>
      <template v-slot:slide-content-2>
        <DefaultFlip class="full-width" />
      </template>
      <template v-slot:slide-content-3>
        <DefaultPulse class="full-width" />
      </template>
      <template v-slot:slide-content-4>
        <DefaultShake class="full-width" />
      </template>
    </DefaultCarousel>
  </PageGeneric>
</template>

<script setup lang="ts">
import PageGeneric from 'components/util/PageGeneric.vue';
import DefaultCarousel from 'components/carousel/DefaultCarousel.vue';
import DefaultZoom from 'components/gsap/DefaultZoom.vue';
import DefaultFade from 'components/gsap/DefaultFade.vue';
import DefaultFlip from 'components/gsap/DefaultFlip.vue';
import DefaultPulse from 'components/gsap/DefaultPulse.vue';
import DefaultShake from 'components/gsap/DefaultShake.vue';

import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

import { type Slide } from 'components/Interface';

const { t } = useI18n();

const slides = ref<Slide[]>([
  { title: t('zoom'), duration: 3000, path: { name: 'zoom', path: 'zoom' } },
  { title: t('fade'), duration: 4000, path: { name: 'fade', path: 'fade' } },
  { title: t('flip'), duration: 5000, path: { name: 'flip', path: 'flip' } },
  { title: t('pulse'), duration: 4000, path: { name: 'pulse', path: 'pulse' } },
  { title: t('shake'), duration: 3000, path: { name: 'shake', path: 'shake' } }
]);
</script>
