<template>
  <q-carousel
    class="q-pa-md"
    v-model="currentSlide"
    arrows
    animated
    infinite
    height="75vh"
    control-color="grey"
  >
    <q-carousel-slide v-for="(slide, index) in slides" :key="index" :name="String(index)" class="row column items-center justify-between">
      <router-link class="text-h4 col-4 text-grey" style="text-decoration: none" :to="slide.path.name">{{ slide.title }}</router-link>
      <div class="col-8">
        <slot :name="`slide-content-${index}`" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { type Slide } from 'src/components/Interface';

const defaultDuration = ref<number>(5000);
const currentSlide = ref('0');
let timer: ReturnType<typeof setTimeout> | null = null;

const props = defineProps<{
  slides: Slide[];
}>();

const advanceSlide = () => {
  const currentIndex = parseInt(currentSlide.value);
  const nextIndex = (currentIndex + 1) % props.slides.length;
  currentSlide.value = String(nextIndex);
};

const scheduleNextSlide = () => {
  if (!props.slides.length) return;

  const currentIndex = parseInt(currentSlide.value);
  const slide = props.slides[currentIndex];
  const duration = slide?.duration ?? defaultDuration.value;

  clearTimeout(timer!);
  timer = setTimeout(() => {
    advanceSlide();
    scheduleNextSlide();
  }, duration);
};

watch(currentSlide, () => {
  scheduleNextSlide();
});
onMounted(() => {
  scheduleNextSlide();
});
onBeforeUnmount(() => {
  clearTimeout(timer!);
});
</script>
