<template>
  <DxSelectBox
      v-model="selectedLocale"
      :data-source="locales"
      display-expr="label"
      value-expr="value"
      @value-changed="setLocale"
  />
</template>

<script>

import {DxSelectBox} from 'devextreme-vue/select-box';

export default {
  name: 'LanguageSelector',
  components: {
    DxSelectBox
  },

  data() {

    return {
      selectedLocale: this.getSavedLocale() || 'ru',
      locales: [
        {value: 'ru', label: this.$t('language.russian')},
        {value: 'en', label: this.$t('language.english')}
      ]
    };
  },

  methods: {

    setLocale() {
      this.$i18n.locale = this.selectedLocale;
      localStorage.setItem('locale', this.selectedLocale);
    },

    getSavedLocale() {
      return localStorage.getItem('locale');
    }
  },
};
</script>