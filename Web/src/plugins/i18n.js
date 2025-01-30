import { createI18n } from 'vue-i18n';
import languages from '@/locales/languages.json';

const i18n = createI18n({
    legacy: true,
    locale: 'ru',
    messages: languages
});

export default i18n;
