<template>
    <div class="item__wrapper">
        <h3 class="item__title" v-html="title" />
        <div class="item__button" @click="openModal">
            <add-button />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { usePopupStore } from '@/stores/popup';
import AddButton from '@/components/_common/SvgTemplates/AddButton.vue';

interface Props {
    title: string;
    popup: string;
    name?: string;
}

const { title, popup, name } = defineProps<Props>();

const popupStore = usePopupStore();

function openModal() {
    popupStore.showPopup(popup, name);
}
</script>

<style lang="scss" scoped>
.item {
    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 9px 9px 9px 20px;
        max-width: 260px;
    }

    &__title {
        @include font(22, 33, 600);
        color: $advancedColor;
    }

    &__button {
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
}
</style>
