<template>
    <content-section>
        <div style="margin-top: 62px">Здесь будет меню каталога</div>
    </content-section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import ContentSection from '@/components/_common/ContentSection.vue';
import { useCategoriesStore } from '@/stores/categories';

const categoriesStore = useCategoriesStore();

onMounted(async () => {
    await categoriesStore.getCategories();
});
</script>

<style lang="scss" scoped></style>
