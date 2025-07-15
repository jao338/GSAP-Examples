<template>
  <div class="row q-col-gutter-xl q-mb-xl">
    <div
      v-for="(anim) in animations"
      :key="anim.preset"
      :ref="el => animationRefs[anim.preset] = el as HTMLElement"
      class="flex justify-center items-center q-pa-xl text-white col-4"
    >
      <q-btn :label="t(anim.preset)" :color="anim.color" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnimations } from 'src/composables/useAnimations'
import { useI18n } from 'vue-i18n'

const { animate } = useAnimations()
const { t } = useI18n()

const animations = [
  { preset: 'shake', color: 'blue' },
  { preset: 'shakeX', color: 'red' },
  { preset: 'shakeY', color: 'green' },
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
