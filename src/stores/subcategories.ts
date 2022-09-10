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
                    undefined,
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
                    undefined,
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

        async editSubcategory(
            title: string,
            categoryId: string | string[],
            id?: number | null,
        ) {
            try {
                const response: ISubcategoriesBackendData = await api.put(
                    API.EDIT_SUBCATEGORY,
                    {
                        userId: categoryId,
                        id,
                        title,
                    },
                    id,
                    {
                        urlParams: categoryId,
                    },
                );
                const index = this.subcategories.findIndex((el) => {
                    return el.subcategoryId === id;
                });
                if (index !== -1) {
                    this.subcategories.splice(index, 1, {
                        categoryId: response.userId,
                        subcategoryId: response.id,
                        title: response.title,
                    });
                }
            } catch (e) {
                console.error(e);
            }
        },
    },
});
