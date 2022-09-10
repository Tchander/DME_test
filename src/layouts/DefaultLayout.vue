<template>
    <div class="layout">
        <header-layout v-if="headerDisplay" />
        <router-view />
        <popups />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HeaderLayout from '@/components/Header/HeaderLayout';
import Popups from '@/components/Popups/Popups.vue';
import { ROUTES } from '@/const-data/_common/routesInfo';

const route = useRoute();

const headerDisplay = computed<boolean>(() => {
    return route.path !== ROUTES.HOME.path;
});
</script>

<style lang="scss" scoped></style>
