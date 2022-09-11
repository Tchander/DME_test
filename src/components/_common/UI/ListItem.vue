<template>
    <div class="item" :class="{ item_active: isActive }">
        <h5 class="item__title" :title="title" v-html="title" />
        <div class="item__icon" @click.stop="openModal">
            <edit-pencil />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { usePopupStore } from '@/stores/popup';
import EditPencil from '@/components/_common/SvgTemplates/EditPencil.vue';

interface Props {
    title: string;
    isActive?: boolean;
    popup: string;
    name?: string;
    itemId?: number;
}

const { title, isActive = false, popup, name, itemId } = defineProps<Props>();

const popupStore = usePopupStore();

function openModal() {
    popupStore.showPopup(popup, name, itemId);
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
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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
