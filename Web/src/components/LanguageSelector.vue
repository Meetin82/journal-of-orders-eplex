<template>
  <select v-model="$i18n.locale" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option value="ru">{{$t('language.russian')}}</option>
    <option value="en">{{$t('language.english')}}</option>
  </select>
</template>

<script>
export default {
  name: 'LanguageSelector',
};
</script>
