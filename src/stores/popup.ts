import { defineStore } from 'pinia';
import { STORE_NAMESPACES } from '@/const-data/namespaces';

export const usePopupStore = defineStore(STORE_NAMESPACES.POPUP, {
    state: () => ({
        popup: '',
        popupMeta: {},
    }),

    getters: {},

    actions: {
        showPopup(params: any) {
            if (typeof params === 'string') {
                this.popup = params;
                this.popupMeta = {};
            } else {
                const { name, ...meta } = params;
                this.popup = name || 'feedback-mini';
                this.popupMeta = meta;
            }
            if (!document.body.classList.contains('fixed')) {
                document.body.classList.add('fixed');
            }
        },

        closePopup() {
            this.popup = '';
            this.popupMeta = {};
            document.body.classList.remove('fixed');
        },
    },
});
