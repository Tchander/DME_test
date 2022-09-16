import { mount } from '@vue/test-utils';
import App from '@/App.vue';

export * from '@/testImports';

describe('App.vue', () => {
    it('mount App', () => {
        const wrapper = mount(App);
        expect(wrapper.exists()).toBe(true);
    });
});
