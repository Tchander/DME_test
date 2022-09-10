export interface IEquipmentBackendData {
    albumId: number;
    id: number;
    title: string;
    url: string;
}

export interface IEquipmentData {
    subcategoryId: number;
    equipmentId: number;
    text: string;
    image: string;
}

export interface IEquipmentState {
    equipments: IEquipmentData[];
}
