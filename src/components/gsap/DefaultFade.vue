<template>
  <div class="row q-col-gutter-xl q-mb-lg no-overflow">
    <div
      v-for="(anim) in animations"
      :key="anim.preset"
      :ref="el => animationRefs[anim.preset] = el as HTMLElement"
      class="flex justify-center items-center q-pa-md text-white col-4 no-overflow"
    >
      <q-btn :label="t(anim.preset)" :color="anim.color" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAnimations } from 'src/composables/useAnimations';
import { useI18n } from 'vue-i18n';

const { animate } = useAnimations()
const { t } = useI18n()

const animations = [
  { preset: 'fadeIn', color: 'blue' },
  { preset: 'fadeOut', color: 'red' },
  { preset: 'fadeInUp', color: 'green' },
  { preset: 'fadeInLeft', color: 'cyan' },
  { preset: 'fadeInDown', color: 'orange' },
  { preset: 'fadeInRight', color: 'pink' },
] as const

const animationRefs = {} as Record<string, HTMLElement | null>

onMounted(() => {
  animations.forEach(({ preset }) => {
    const el = animationRefs[preset]
    if (el) {
      animate(el, preset)
    }
  })
})
</script>
