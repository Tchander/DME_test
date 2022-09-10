<template>
    <div class="subcategories">
        <div class="menu-column">
            <add-new-item
                :name="POPUP_MAPPER.ADD_SUBCATEGORY"
                :title="MENU_TITLES.SUBCATEGORIES"
            />
            <list-item
                v-for="subcategory in subcategories"
                :key="subcategory.subcategoryId"
                :title="subcategory.title"
                :is-active="state.activeSubcategoryId === subcategory.subcategoryId"
                :name="POPUP_MAPPER.EDIT_SUBCATEGORY"
                @click="openEquipments(subcategory.subcategoryId)"
            />
        </div>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSubcategoriesStore } from '@/stores/subcategories';
import AddNewItem from '@/components/_common/UI/AddNewItem.vue';
import ListItem from '@/components/_common/UI/ListItem.vue';
import { MENU_TITLES } from '@/const-data/_common/titles';
import { ROUTES } from '@/const-data/_common/routesInfo';
import { POPUP_MAPPER } from '@/const-data/_common/popup';

interface State {
    activeSubcategoryId: number | null;
}

const state = reactive<State>({
    activeSubcategoryId: null,
});

const subcategoriesStore = useSubcategoriesStore();

const { subcategories } = storeToRefs(subcategoriesStore);

const route = useRoute();
const router = useRouter();

async function getData() {
    await subcategoriesStore.getSubcategories(route?.params?.catId);
}

function openEquipments(subcategoryId: number) {
    if (state.activeSubcategoryId === subcategoryId) {
        state.activeSubcategoryId = null;
        router.push({ path: `${ROUTES.CATALOG.path}/${route.params.catId}` });
    } else {
        state.activeSubcategoryId = subcategoryId;
        router.push({
            path: `${ROUTES.CATALOG.path}/${route.params.catId}/${subcategoryId}`,
        });
    }
}

watch(
    () => route?.params?.catId,
    async () => {
        await getData();
    },
);

onMounted(async () => {
    if (route?.params?.subcatId) {
        state.activeSubcategoryId = +route.params.subcatId;
    }
    await getData();
});
</script>

<style lang="scss" scoped>
.subcategories {
    display: grid;
    grid-template-columns: 260px 1fr;
}
</style>
