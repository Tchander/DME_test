import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

axios.interceptors.request.use((config) => ({
    ...config,
    baseURL: '/',
}));

createApp(App).use(VueAxios, axios).use(router).use(pinia).mount('#app');
