<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <DefaultFab />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import DefaultFab from 'components/util/DefaultFab.vue';

const { t } = useI18n();

useMeta(() => ({
  title: t('gsap')
}))
</script>
