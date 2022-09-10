<template>
    <div class="item" :class="{ item_active: isActive }">
        <h5 class="item__title" v-html="title" />
        <div class="item__icon" @click.stop="openModal">
            <edit-pencil />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import EditPencil from '@/components/_common/SvgTemplates/EditPencil.vue';

interface Props {
    title: string;
    isActive?: boolean;
}

const { title, isActive = false } = defineProps<Props>();

function openModal() {
    console.log('Модалка открыта');
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 40px;
    padding: 11px 12px 11px 20px;
    cursor: pointer;
    border-top: 1px solid $light-gray;
    box-sizing: border-box;
    transition: background-color 0.3s ease-in-out;

    &:last-child {
        border-bottom: 1px solid $light-gray;
    }

    &__title {
        @include font(14, 16, 500);
        color: $mainColor;
        transition: color 0.3s ease-in-out;
    }

    &__icon {
        width: 24px;
        height: 24px;
    }

    &:hover,
    &_active {
        background-color: $grayBackground;

        .item__title {
            color: $beruza;
        }
    }
}
</style>
