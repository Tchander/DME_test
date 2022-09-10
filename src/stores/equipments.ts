import { defineStore } from 'pinia';
import api from '@/api';
import { STORE_NAMESPACES } from '@/const-data/namespaces';
import { IEquipmentState, IEquipmentBackendData } from '@/interfaces/stores/Equipments';
import { API } from '@/const-data/api';

export const useEquipmentsStore = defineStore(STORE_NAMESPACES.EQUIPMENTS, {
    state: (): IEquipmentState => ({
        equipments: [],
    }),

    getters: {},

    actions: {
        async getEquipments(subcategoryId: string | string[]) {
            try {
                const response: IEquipmentBackendData[] = await api.get(API.EQUIPMENTS, {
                    urlParams: subcategoryId,
                });
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
        ) {
            try {
                const response = await api.post(
                    API.EQUIPMENTS,
                    {
                        title: text,
                        url: image,
                    },
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
