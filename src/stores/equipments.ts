import { defineStore } from 'pinia';
import api from '@/api';
import { STORE_ID } from '@/enums';
import { IEquipmentState, IEquipmentBackendData } from '@/types/stores/equipments';
import { API } from '@/const-data/api';

export const useEquipmentsStore = defineStore(STORE_ID.EQUIPMENTS, {
    state: (): IEquipmentState => ({
        equipments: [],
    }),

    getters: {},

    actions: {
        async getEquipments(subcategoryId: string | string[]) {
            try {
                const response: IEquipmentBackendData[] = await api.get(
                    API.EQUIPMENTS,
                    undefined,
                    {
                        urlParams: subcategoryId,
                    },
                );
                this.equipments = response.map((data: IEquipmentBackendData) => ({
                    subcategoryId: data.albumId,
                    equipmentId: data.id,
                    text: data.title,
                    image: data.url,
                }));
            } catch (e) {
                console.error(e);
            }
        },

        async addEquipment(
            text: string,
            image: string,
            subcategoryId: string | string[],
            id: number | null,
        ) {
            try {
                const response = await api.post(
                    API.EQUIPMENTS,
                    {
                        title: text,
                        url: image,
                    },
                    id,
                    {
                        urlParams: subcategoryId,
                    },
                );
                this.equipments.push({
                    subcategoryId: response.albumId,
                    equipmentId: response.id,
                    text: response.title,
                    image: response.url,
                });
            } catch (e) {
                console.error(e);
            }
        },
    },
});
