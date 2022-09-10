import { defineStore } from 'pinia';
import api from '@/api';
import { STORE_NAMESPACES } from '@/const-data/namespaces';
import {
    ISubcategoriesBackendData,
    ISubcategoriesState,
} from '@/interfaces/stores/Subcategories';
import { API } from '@/const-data/api';

export const useSubcategoriesStore = defineStore(STORE_NAMESPACES.SUBCATEGORIES, {
    state: (): ISubcategoriesState => ({
        subcategories: [],
    }),

    getters: {},

    actions: {
        async getSubcategories(categoryId: string | string[]) {
            try {
                const response: ISubcategoriesBackendData[] = await api.get(
                    API.SUBCATEGORIES,
                    { urlParams: categoryId },
                );
                this.subcategories = response.map((data: ISubcategoriesBackendData) => ({
                    categoryId: data.userId,
                    subcategoryId: data.id,
                    title: data.title,
                }));
            } catch (e) {
                console.error(e);
            }
        },

        async addSubcategory(title: string, categoryId: string | string[]) {
            try {
                const response: ISubcategoriesBackendData = await api.post(
                    API.SUBCATEGORIES,
                    {
                        title,
                    },
                    {
                        urlParams: categoryId,
                    },
                );
                this.subcategories.push({
                    categoryId: response.userId,
                    subcategoryId: response.id,
                    title: response.title,
                });
            } catch (e) {
                console.error(e);
            }
        },
    },
});
