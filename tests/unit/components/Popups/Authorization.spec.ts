import { mount } from '@vue/test-utils';
import Authorization from '@/components/Popups/Authorization.vue';
import { POPUP_TITLES } from '@/const-data';

export * from '@/testImports';

describe('Authorization.vue', () => {
    it('mount Authorization', () => {
        const wrapper = mount(Authorization);
        expect(wrapper.exists()).toBe(true);
    });

    it('Authorization title', () => {
        const wrapper = mount(Authorization);
        expect(wrapper.html()).toContain(POPUP_TITLES.AUTHORIZATION);
    });
});
