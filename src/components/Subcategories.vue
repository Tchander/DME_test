<template>
    <div>
        <add-new-item :title="'Subcategories'" />
        <list-item
            v-for="subcategory in subcategories"
            :key="subcategory.subcategoryId"
            :title="subcategory.title"
            @click="openEquipments(subcategory.subcategoryId)"
        />
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSubcategoriesStore } from '@/stores/subcategories';
import AddNewItem from '@/components/_common/UI/AddNewItem.vue';
import ListItem from '@/components/_common/UI/ListItem.vue';

const subcategoriesStore = useSubcategoriesStore();

const { subcategories } = storeToRefs(subcategoriesStore);

const route = useRoute();

async function getData() {
    await subcategoriesStore.getSubcategories(route?.params?.catId);
}

function openEquipments(subcategoryId: number) {
    console.log(subcategoryId);
    // router.push({ path: `/catalog/${categoryId}` });
}

watch(
    () => route?.params?.catId,
    () => {
        getData();
    },
);

onMounted(async () => {
    await getData();
});
</script>

<style lang="scss" scoped></style>
