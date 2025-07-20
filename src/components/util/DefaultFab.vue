<template>
  <q-page-sticky position="bottom" :offset="fabPos" class="q-pa-md">
    <q-fab
      :label="t('acoes')"
      label-position="left"
      color="grey"
      icon="keyboard_arrow_up"
      direction="up"
      :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab"
    >
      <q-fab-action color="primary" @click="toggleColorMode" :icon="system.darkMode ? 'light_mode' : 'dark_mode'" :label="system.darkMode ? t('darkMode') : t('whiteMode')" />
      <q-fab-action color="secondary" @click="changeLanguage()" icon="language" :label="t('mudarLinguagem')" />
    </q-fab>
  </q-page-sticky>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSystemStore } from 'stores/system';
import { Dark } from 'quasar';

const { t, locale } = useI18n();

const system = useSystemStore();

const fabPos = ref<[number, number]>([ 0, 18 ])
const draggingFab = ref<boolean>(false)

const supportedLocales = ['en-US', 'pt-BR'] as const
type Locale = (typeof supportedLocales)[number]

function changeLanguage(): void {
  const currentIndex = supportedLocales.indexOf(locale.value as Locale)
  const nextIndex = (currentIndex + 1) % supportedLocales.length
  locale.value = supportedLocales[nextIndex]!
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function moveFab(ev: any){
  draggingFab.value = !ev.isFirst && !ev.isFinal
  fabPos.value = [
    Number(fabPos.value[ 0 ]) - ev.delta.x,
    Number(fabPos.value[ 1 ]) - ev.delta.y
  ]
}

function toggleColorMode(): void
{
  system.setColorMode()
}

onMounted(() => {
  console.log(Dark.isActive)
})
</script>
