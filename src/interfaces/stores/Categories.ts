export interface ICategoriesBackendData {
    id: number;
    username: string;
}

export interface ICategoriesData {
    categoryId: number;
    title: string;
}

export interface ICategoriesState {
    categories: ICategoriesData[];
}
