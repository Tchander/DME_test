import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

export * from '@/testImports';

describe('Home.vue', () => {
    it('mount Home', () => {
        const wrapper = mount(Home);
        expect(wrapper.exists()).toBe(true);
    });
});
