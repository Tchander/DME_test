import { defineStore } from 'pinia';
import { STORE_NAMESPACES } from '@/const-data/namespaces';
import { ICategoriesState, ICategoriesBackendData } from '@/interfaces/stores/Categories';
import api from '@/api';

export const useCategoriesStore = defineStore(STORE_NAMESPACES.CATEGORIES, {
    state: (): ICategoriesState => ({
        categories: [],
    }),

    getters: {},

    actions: {
        async getCategories() {
            try {
                const response: ICategoriesBackendData[] = await api.get('categories');
                this.categories = response.map((data: ICategoriesBackendData) => ({
                    categoryId: data.id,
                    title: data.username,
                }));
            } catch (e) {
                console.error(e);
            }
        },
    },
});
