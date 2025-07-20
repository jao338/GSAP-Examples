import { defineStore } from 'pinia'
import { ref } from 'vue';
import { Dark } from 'quasar';

export const useSystemStore = defineStore('system', () => {

  const darkMode = ref(Dark.isActive)

  function setColorMode(): void
  {
    Dark.toggle();
    darkMode.value = !darkMode.value
  }

  return { darkMode, setColorMode }

})
