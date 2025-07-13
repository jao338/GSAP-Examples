<template>
  <div class="row q-col-gutter-xl q-mb-xl">
    <div ref="fadeIn" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('fadeIn')" color="blue" />
    </div>
    <div ref="fadeOut" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('fadeOut')" color="red" />
    </div>
    <div ref="fadeInUp" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('fadeInUp')" color="green" />
    </div>
    <div ref="fadeInLeft" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('fadeInLeft')" color="cyan" />
    </div>
    <div ref="fadeInDown" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('fadeInDown')" color="orange" />
    </div>
    <div ref="fadeInRight" class="flex justify-center items-center q-pa-xl text-white col-4">
      <q-btn :label="t('fadeInRight')" color="pink" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnimations } from 'src/composables/useAnimations'
import { useI18n } from 'vue-i18n';

const { animate } = useAnimations();
const { t } = useI18n();

const fadeOut = ref<HTMLElement | null>(null);
const fadeIn = ref<HTMLElement | null>(null);
const fadeInUp = ref<HTMLElement | null>(null);
const fadeInDown = ref<HTMLElement | null>(null);
const fadeInLeft = ref<HTMLElement | null>(null);
const fadeInRight = ref<HTMLElement | null>(null);

onMounted(() => {
  if (fadeOut.value) {
    animate(fadeOut.value, 'fadeOut');
  }
  if (fadeIn.value) {
    animate(fadeIn.value, 'fadeIn');
  }
  if (fadeInUp.value) {
    animate(fadeInUp.value, 'fadeInUp');
  }
  if (fadeInDown.value) {
    animate(fadeInDown.value, 'fadeInDown');
  }
  if (fadeInLeft.value) {
    animate(fadeInLeft.value, 'fadeInLeft');
  }
  if (fadeInRight.value) {
    animate(fadeInRight.value, 'fadeInRight');
  }
})
</script>
