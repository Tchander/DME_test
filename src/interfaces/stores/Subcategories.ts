export interface ISubcategoriesBackendData {
    userId: number;
    id: number;
    title: string;
}

export interface ISubcategoriesData {
    categoryId: number;
    subcategoryId: number;
    title: string;
}

export interface ISubcategoriesState {
    subcategories: ISubcategoriesData[];
}
