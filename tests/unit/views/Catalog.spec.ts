import { mount } from '@vue/test-utils';
import Catalog from '@/views/Catalog.vue';

export * from '@/testImports';

describe('Catalog.vue', () => {
    it('mount Catalog', () => {
        const wrapper = mount(Catalog);
        expect(wrapper.exists()).toBe(true);
    });
});
