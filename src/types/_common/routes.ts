export interface IRoutesPaths {
    path: string;
    name?: string;
}

export interface IRoutes {
    HOME: IRoutesPaths;
    CATALOG: IRoutesPaths;
    SUBCATEGORIES: IRoutesPaths;
    EQUIPMENTS: IRoutesPaths;
    CATCH_ALL: IRoutesPaths;
}
