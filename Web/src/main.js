import {createApp} from 'vue';
import {createPinia} from 'pinia';
import router from './router';
import App from './App.vue';
import i18n from './plugins/i18n';
import 'devextreme/dist/css/dx.light.css';
import './assets/lib/index.styl';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ToastPlugin, {
    position: 'top-right',
});
app.mount('#app');
