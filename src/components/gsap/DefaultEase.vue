<template>
  <div v-for="(group, groupIndex) in groupedEasings" :key="groupIndex" class="row q-col-gutter-xl q-mb-xl">
    <div
      v-for="item in group"
      :key="item.key"
      :ref="el => easingRefs[item.key] = el as HTMLElement"
      class="col-4"
    >
      <q-btn :label="t(item.key)" :color="item.color" />
    </div>
  </div>

  <div class="row q-col-gutter-xl justify-center">
    <div
      v-for="(ease, index) in powerEases"
      :key="ease"
      :ref="el => powerRefs[index] = el as HTMLElement"
      class="col-3"
    >
      <q-btn :label="t(ease)" color="grey" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';
import { type EasingItem } from 'components/Interface';

const { t } = useI18n();

const groupedEasings: EasingItem[][] = [
  [
    { key: 'bounceOut', ease: 'bounce.out', color: 'red' },
    { key: 'bounceIn', ease: 'bounce.in', color: 'green' },
    { key: 'bounceInOut', ease: 'bounce.inOut', color: 'blue' }
  ],
  [
    { key: 'backOut', ease: 'back.out', color: 'red' },
    { key: 'backIn', ease: 'back.in', color: 'green' },
    { key: 'backInOut', ease: 'back.inOut', color: 'blue' }
  ],
  [
    { key: 'elasticOut', ease: 'elastic.out', color: 'red' },
    { key: 'elasticIn', ease: 'elastic.in', color: 'green' },
    { key: 'elasticInOut', ease: 'elastic.inOut', color: 'blue' }
  ],
  [
    { key: 'expoOut', ease: 'expo.out', color: 'red' },
    { key: 'expoIn', ease: 'expo.in', color: 'green' },
    { key: 'expoInOut', ease: 'expo.inOut', color: 'blue' }
  ]
]

const easingRefs = ref<Record<string, HTMLElement | null>>({})
const powerRefs = ref<HTMLElement[]>([])

const powerEases = ['power1', 'power2', 'power3', 'power4']

onMounted(() => {
  groupedEasings.flat().forEach(({ key, ease }) => {
    const el = easingRefs.value[key]
    if (el) {
      gsap.from(el, {
        opacity: 0,
        y: -50,
        duration: 4,
        ease
      })
    }
  })

  // Anima power easings
  powerRefs.value.forEach((el, index) => {
    if (el) {
      gsap.from(el, {
        opacity: 0,
        y: -150,
        duration: 1,
        ease: `${powerEases[index]}.out`
      })
    }
  })
})
</script>
