import { defineStore } from 'pinia';
import { STORE_ID } from '@/enums';

interface PopupState {
    popup: string;
    name?: string;
    id?: number | null;
}

const FIXED = 'fixed';

export const usePopupStore = defineStore(STORE_ID.POPUP, {
    state: (): PopupState => ({
        popup: '',
        name: '',
        id: null,
    }),

    getters: {},

    actions: {
        showPopup(params: string, name?: string, id?: number) {
            this.popup = params;
            if (id) {
                this.id = id;
            }
            if (name) {
                this.name = name;
            }
            if (!document.body.classList.contains(FIXED)) {
                document.body.classList.add(FIXED);
            }
        },

        closePopup() {
            this.popup = '';
            this.name = '';
            this.id = null;
            document.body.classList.remove(FIXED);
        },
    },
});
