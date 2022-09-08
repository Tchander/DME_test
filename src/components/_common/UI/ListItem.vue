<template>
    <div class="item">
        <h4 class="item__title" v-html="title" />
        <edit-pencil class="item__icon" @click.stop="openModal" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import EditPencil from '@/components/_common/SvgTemplates/EditPencil.vue';

interface Props {
    title: string;
}

const { title } = defineProps<Props>();

function openModal() {
    console.log('Модалка открыта');
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 12px 11px 20px;
    cursor: pointer;
    border-top: 1px solid $light-gray;
    transition: background-color 0.3s ease-in-out;

    &__title {
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
        color: $mainColor;
        transition: color 0.3s ease-in-out;
    }

    &:hover {
        background-color: $grayBackground;

        .item__title {
            color: $beruza;
        }
    }
}
</style>
