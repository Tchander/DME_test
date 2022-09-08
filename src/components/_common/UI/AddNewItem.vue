<template>
    <div class="item__wrapper">
        <h3 class="item__title" v-html="title" />
        <add-button class="item__button" @click="openModal" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import AddButton from '@/components/_common/SvgTemplates/AddButton.vue';

interface Props {
    title: string;
}

const { title } = defineProps<Props>();

function openModal() {
    console.log('Модалка открылась');
}
</script>

<style lang="scss" scoped>
.item {
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 9px 9px 9px 20px;
    }

    &__title {
        color: $advancedColor;
        font-size: 22px;
        line-height: 33px;
        font-weight: 600;
    }

    &__button {
        cursor: pointer;
    }
}
</style>
