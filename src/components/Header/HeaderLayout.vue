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
    border-bottom: 1px solid $light-gray;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06);

    &__title {
        @include font(28, 42, 600);
        padding: 9px 20px;
    }
}
</style>
