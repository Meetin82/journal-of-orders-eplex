<template>
  <LanguageSelector/>
  <router-view/>
</template>

<script>
import LanguageSelector from './components/LanguageSelector.vue';

export default {
  name: 'App',
  components: {
    LanguageSelector,
  },
};
</script>
