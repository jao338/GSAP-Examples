<template>
  <PageGeneric class="row items-center justify-center q-pa-xl">
    <div class="col-12 text-center">
      <span class="text-h4">{{ t('gsap') }}</span>
    </div>
    <DefaultCarousel :slides="slides" class="row justify-center items-center col-6">
      <template v-slot:slide-content-0>
        <DefaultEase class="full-width" />
      </template>
      <template v-slot:slide-content-1>
        <span>{{ t('lorem') }}</span>
      </template>
    </DefaultCarousel>
  </PageGeneric>
</template>

<script setup lang="ts">
import PageGeneric from 'components/util/PageGeneric.vue';
import DefaultCarousel from 'components/carousel/DefaultCarousel.vue';
import DefaultEase from 'components/gsap/DefaultEase.vue';

import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

import { type Slide } from 'components/Interface';

const { t } = useI18n();

const slides = ref<Slide[]>([
  { title: t('ease'), duration: 10000 },
  { title: 'Slide 2', duration: 1000 }
]);
</script>
