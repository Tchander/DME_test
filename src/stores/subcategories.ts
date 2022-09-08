import { defineStore } from 'pinia';
import { STORE_NAMESPACES } from '@/const-data/namespaces';
import {
    ISubcategoriesBackendData,
    ISubcategoriesState,
} from '@/interfaces/stores/Subcategories';
import api from '@/api';

export const useSubcategoriesStore = defineStore(STORE_NAMESPACES.SUBCATEGORIES, {
    state: (): ISubcategoriesState => ({
        subcategories: [],
    }),

    getters: {},

    actions: {
        async getSubcategories(categoryId: number) {
            try {
                const response: ISubcategoriesBackendData[] = await api.get(
                    'subcategories',
                    { urlParams: categoryId },
                );
                this.subcategories = response.map((data: ISubcategoriesBackendData) => ({
                    categoryId: data.userId,
                    subcategoryId: data.id,
                    title: data.title,
                }));
                console.log(this.subcategories);
            } catch (e) {
                console.error(e);
            }
        },
    },
});
