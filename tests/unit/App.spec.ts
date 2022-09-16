import { mount } from '@vue/test-utils';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');

beforeAll(() => {});

describe('App.vue', () => {
    it('mount App', () => {
        const wrapper = mount(App);
        console.log(wrapper.html());
    });
});
