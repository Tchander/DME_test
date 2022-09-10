import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from '@/const-data/_common/routesInfo';

const Home = () => import('@/views/Home.vue');
const Catalog = () => import('@/views/Catalog.vue');
const Subcategories = () => import('@/components/Subcategories.vue');

const routes = [
    {
        path: ROUTES.HOME.path,
        name: ROUTES.HOME.name,
        component: Home,
    },
    {
        path: ROUTES.CATALOG.path,
        name: ROUTES.CATALOG.name,
        component: Catalog,
        children: [
            {
                path: `${ROUTES.CATALOG.path}/:catId`,
                component: Subcategories,
            },
        ],
    },
    {
        path: '/:catchAll(.*)',
        redirect: ROUTES.HOME.path,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
