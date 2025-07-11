<template>
  <div class="row q-col-gutter-xl q-mb-xl">
    <div ref="bounceOut" class="col-4">
      <q-btn :label="t('bounceOut')" color="red"/>
    </div>
    <div ref="bounceIn" class="col-4">
      <q-btn :label="t('bounceIn')" color="green"/>
    </div>
    <div ref="bounceInOut" class="col-4">
      <q-btn :label="t('bounceInOut')" color="blue" />
    </div>
  </div>

  <div class="row q-col-gutter-xl q-mb-xl">
    <div ref="backOut" class="col-4">
      <q-btn :label="t('backOut')" color="red"/>
    </div>
    <div ref="backIn" class="col-4">
      <q-btn :label="t('backIn')" color="green"/>
    </div>
    <div ref="backInOut" class="col-4">
      <q-btn :label="t('backInOut')" color="blue" />
    </div>
  </div>

  <div class="row q-col-gutter-xl justify-center">
    <div
      v-for="(item, index) in 4"
      :key="index"
      :ref="el => powerRefs[index] = el as HTMLElement"
      class="col-3"
    >
      <q-btn :label="t(`power${index + 1}`)" color="grey" />
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';

const bounceOut = ref<HTMLElement | null>(null);
const bounceIn = ref<HTMLElement | null>(null);
const bounceInOut = ref<HTMLElement | null>(null);
const backOut = ref<HTMLElement | null>(null);
const backIn = ref<HTMLElement | null>(null);
const backInOut = ref<HTMLElement | null>(null);

const powerRefs = ref<HTMLElement[]>([]);

const { t } = useI18n();

onMounted(() => {
  if (bounceOut.value) {
    gsap.from(bounceOut.value, {
      opacity: 0,
      y: -50,
      duration: 4,
      ease: 'bounce.out'
    });
  }

  if (bounceIn.value) {
    gsap.from(bounceIn.value, {
      opacity: 0,
      y: -50,
      duration: 4,
      ease: 'bounce.in'
    });
  }

  if (bounceInOut.value) {
    gsap.from(bounceInOut.value, {
      opacity: 0,
      y: -50,
      duration: 4,
      ease: 'bounce.inOut'
    });
  }
  if (backOut.value) {
    gsap.from(backOut.value, {
      opacity: 0,
      y: -50,
      duration: 4,
      ease: 'back.out'
    });
  }

  if (backIn.value) {
    gsap.from(backIn.value, {
      opacity: 0,
      y: -50,
      duration: 4,
      ease: 'back.in'
    });
  }

  if (backInOut.value) {
    gsap.from(backInOut.value, {
      opacity: 0,
      y: -50,
      duration: 4,
      ease: 'back.inOut'
    });
  }

  powerRefs.value.forEach((el, index) => {
    if (el) {
      gsap.from(el, {
        opacity: 0,
        y: -150,
        duration: 1,
        ease: `power${index + 1}.out`
      });
    }
  });
});
</script>
