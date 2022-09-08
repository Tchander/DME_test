import { defineStore } from 'pinia';
import { STORE_NAMESPACES } from '@/const-data/namespaces';
import { IEquipmentState, IEquipmentBackendData } from '@/interfaces/stores/Equipments';
import api from '@/api';

export const useEquipmentsStore = defineStore(STORE_NAMESPACES.EQUIPMENTS, {
    state: (): IEquipmentState => ({
        equipments: [],
    }),

    getters: {},

    actions: {
        async getSubcategories(subcategoryId: number) {
            try {
                const response: IEquipmentBackendData[] = await api.get('equipments', {
                    urlParams: subcategoryId,
                });
                this.equipments = response.map((data: IEquipmentBackendData) => ({
                    subcategoryId: data.albumId,
                    equipmentId: data.id,
                    title: data.title,
                    url: data.url,
                }));
                console.log(this.equipments);
            } catch (e) {
                console.error(e);
            }
        },
    },
});
