<template>
    <content-section>
        <div class="catalog">
            <div class="catalog-column">
                <add-new-item :title="'Categories'" />
                <list-item
                    v-for="category in categories"
                    :key="category.categoryId"
                    :title="category.title"
                    @click="openSubcategories"
                />
            </div>
        </div>
    </content-section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '@/stores/categories';
import ContentSection from '@/components/_common/ContentSection.vue';
import AddNewItem from '@/components/_common/UI/AddNewItem.vue';
import ListItem from '@/components/_common/UI/ListItem.vue';

const categoriesStore = useCategoriesStore();

const { categories } = storeToRefs(categoriesStore);

function openSubcategories() {
    console.log('Открылась подкатегория');
}

onMounted(async () => {
    await categoriesStore.getCategories();
});
</script>

<style lang="scss" scoped>
.catalog-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid $light-gray;
    border-top: 0;
    max-width: 260px;
}
</style>
