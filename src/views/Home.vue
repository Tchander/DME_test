<template>
    <content-section>
        <div>Тут будет форма авторизации</div>
    </content-section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ContentSection from '@/components/_common/ContentSection.vue';
import { ROUTES } from '@/const-data/_common/routesInfo';

const router = useRouter();

onMounted(() => {
    router.push({ name: ROUTES.CATALOG.name });
});
</script>

<style lang="scss" scoped></style>
