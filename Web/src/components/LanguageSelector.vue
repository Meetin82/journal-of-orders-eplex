<template>
  <div class="language-selector">
    <select v-model="$i18n.locale" class="language-select">
      <option value="ru">{{$t('language.russian')}}</option>
      <option value="en">{{$t('language.english')}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
};
</script>
