<template>
    <content-section>
        <div class="catalog">
            <div class="menu-column">
                <add-new-item :title="MENU_TITLES.CATEGORIES" />
                <list-item
                    v-for="category in categories"
                    :key="category.categoryId"
                    :title="category.title"
                    :is-active="state.activeCategoryId === category.categoryId"
                    @click="openSubcategories(category.categoryId)"
                />
            </div>
            <router-view />
        </div>
    </content-section>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useCategoriesStore } from '@/stores/categories';
import ContentSection from '@/components/_common/ContentSection.vue';
import AddNewItem from '@/components/_common/UI/AddNewItem.vue';
import ListItem from '@/components/_common/UI/ListItem.vue';
import { MENU_TITLES } from '@/const-data/_common/titles';
import { ROUTES } from '@/const-data/_common/routesInfo';

interface State {
    activeCategoryId: number | null;
}

const state = reactive<State>({
    activeCategoryId: null,
});

const router = useRouter();
const route = useRoute();

const categoriesStore = useCategoriesStore();

const { categories } = storeToRefs(categoriesStore);

function openSubcategories(categoryId: number) {
    if (state.activeCategoryId === categoryId) {
        state.activeCategoryId = null;
        router.push({ path: ROUTES.CATALOG.path });
    } else {
        state.activeCategoryId = categoryId;
        router.push({ path: `${ROUTES.CATALOG.path}/${categoryId}` });
    }
}

onMounted(async () => {
    if (route?.params?.catId) {
        state.activeCategoryId = +route.params.catId;
    }
    await categoriesStore.getCategories();
});
</script>

<style lang="scss" scoped>
.catalog {
    display: grid;
    grid-template-columns: 260px 1fr;
    padding-bottom: 50px;
}
</style>
