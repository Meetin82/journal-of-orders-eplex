import {createI18n} from 'vue-i18n';
import languages from '@/locales/languages.json';

const savedLocale = localStorage.getItem('locale') || 'ru';

const i18n = createI18n({
    legacy: true,
    locale: savedLocale,
    messages: languages,
});

export default i18n;
