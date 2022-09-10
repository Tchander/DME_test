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
        async getEquipments(subcategoryId: string | string[]) {
            try {
                const response: IEquipmentBackendData[] = await api.get('equipments', {
                    urlParams: subcategoryId,
                });
                this.equipments = response.map((data: IEquipmentBackendData) => ({
                    subcategoryId: data.albumId,
                    equipmentId: data.id,
                    text: data.title,
                    image: data.url,
                }));
                console.log(this.equipments);
            } catch (e) {
                console.error(e);
            }
        },
    },
});
