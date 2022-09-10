import { IRoutes } from '@/interfaces/_common/Routes';

export const ROUTES: IRoutes = {
    HOME: {
        path: '/',
        name: 'home',
    },
    CATALOG: {
        path: '/catalog',
        name: 'catalog',
    },
    SUBCATEGORIES: {
        path: '/catalog/:catId',
        name: 'subcategories',
    },
    EQUIPMENTS: {
        path: '/catalog/:catId/:subcatId',
        name: 'equipments',
    },
    CATCH_ALL: {
        path: '/:catchAll(.*)',
    },
};
