import { TPoints } from '@/types/api';

export default <TPoints>{
    categories: 'http://jsonplaceholder.typicode.com/users',
    subcategories: (categoryId: number) =>
        `http://jsonplaceholder.typicode.com/users/${categoryId}/albums`,
    equipments: (subcategoryId: number) =>
        `http://jsonplaceholder.typicode.com/albums/${subcategoryId}/photos`,
};
