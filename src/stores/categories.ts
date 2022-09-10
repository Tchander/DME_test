import { defineStore } from 'pinia';
import api from '@/api';
import { STORE_NAMESPACES } from '@/const-data/namespaces';
import { ICategoriesState, ICategoriesBackendData } from '@/interfaces/stores/Categories';
import { API } from '@/const-data/api';

export const useCategoriesStore = defineStore(STORE_NAMESPACES.CATEGORIES, {
    state: (): ICategoriesState => ({
        categories: [],
    }),

    getters: {},

    actions: {
        async getCategories() {
            try {
                const response: ICategoriesBackendData[] = await api.get(API.CATEGORIES);
                this.categories = response.map((data: ICategoriesBackendData) => ({
                    categoryId: data.id,
                    title: data.username,
                }));
            } catch (e) {
                console.error(e);
            }
        },

        async addCategory(title: string) {
            try {
                const response: ICategoriesBackendData = await api.post(API.CATEGORIES, {
                    username: title,
                });
                this.categories.push({
                    categoryId: response.id,
                    title: response.username,
                });
            } catch (e) {
                console.error(e);
            }
        },
    },
});
