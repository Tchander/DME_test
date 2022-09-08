<template>
    <header class="header">
        <content-section>
            <h2 class="header__title" v-html="HEADER.title" />
        </content-section>
    </header>
</template>

<script setup lang="ts">
import ContentSection from '@/components/_common/ContentSection.vue';
import { HEADER } from '@/const-data/header/header';
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1000;
    padding: 9px 0;
    border-bottom: 1px solid $light-gray;

    &__title {
        font-size: 28px;
        line-height: 42px;
        font-weight: 600;
    }
}
</style>
