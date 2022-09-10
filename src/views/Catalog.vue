<template>
    <content-section>
        <div class="catalog">
            <div class="catalog-column">
                <add-new-item :title="'Categories'" />
                <list-item
                    v-for="category in categories"
                    :key="category.categoryId"
                    :title="category.title"
                    :is-active="state.activeCategoryId === category.categoryId"
                    @click="openSubcategories(category.categoryId)"
                />
            </div>
            <div class="catalog-column">
                <router-view />
            </div>
        </div>
    </content-section>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useCategoriesStore } from '@/stores/categories';
import ContentSection from '@/components/_common/ContentSection.vue';
import AddNewItem from '@/components/_common/UI/AddNewItem.vue';
import ListItem from '@/components/_common/UI/ListItem.vue';

interface State {
    activeCategoryId: number | null;
}

const state = reactive<State>({
    activeCategoryId: null,
});

const router = useRouter();

const categoriesStore = useCategoriesStore();

const { categories } = storeToRefs(categoriesStore);

function openSubcategories(categoryId: number) {
    state.activeCategoryId = categoryId;
    router.push({ path: `/catalog/${categoryId}` });
}

onMounted(async () => {
    await categoriesStore.getCategories();
});
</script>

<style lang="scss" scoped>
.catalog {
    display: flex;
}
.catalog-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid $light-gray;
    border-top: 0;
    max-width: 260px;
}
</style>
