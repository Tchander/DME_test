import { defineStore } from 'pinia';
import api from '@/api';
import { STORE_ID } from '@/enums';
import { ICategoriesState, ICategoriesBackendData } from '@/types/stores/categories';
import { API } from '@/const-data/api';

export const useCategoriesStore = defineStore(STORE_ID.CATEGORIES, {
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

        async editCategory(title: string, id?: number | null) {
            try {
                const response: ICategoriesBackendData = await api.put(
                    API.CATEGORIES,
                    {
                        id,
                        username: title,
                    },
                    id,
                );
                const index = this.categories.findIndex((el) => {
                    return el.categoryId === id;
                });
                if (index !== -1) {
                    this.categories.splice(index, 1, {
                        categoryId: response.id,
                        title: response.username,
                    });
                }
            } catch (e) {
                console.error(e);
            }
        },
    },
});
