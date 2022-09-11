<template>
    <div class="backdrop" @click.self="unclosed ? undefined : close()">
        <div class="popup">
            <div class="inner-content">
                <slot />
            </div>
            <button v-if="!unclosed" class="icon-cross" type="button" @click="close()">
                <close-cross class="icon-cross_img" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue';
import { useRoute } from 'vue-router';
import CloseCross from '@/components/_common/SvgTemplates/CloseCross.vue';
import { EVENTS_MAPPER } from '@/const-data/_common/emits';
import { usePopupStore } from '@/stores/popup';

const popupStore = usePopupStore();
const route = useRoute();

const emit = defineEmits([EVENTS_MAPPER.CLOSED]);

interface Props {
    unclosed?: boolean;
}

const { unclosed = false } = defineProps<Props>();

watch(
    () => route.path,
    () => {
        popupStore.closePopup();
    },
);

function close() {
    popupStore.closePopup();
    emit(EVENTS_MAPPER.CLOSED);
}
</script>

<style lang="scss" scoped>
.backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-width: 100vw;
    height: 100vh;
    background-color: rgba(24, 33, 56, 0.5);
    overflow-y: scroll;
    z-index: 1000;
}

.popup {
    position: relative;
    margin: auto;
    max-width: 90%;
}

.inner-content {
    width: 443px;
    overflow: auto;
    background-color: #fff;
    border: 1px solid $light-gray;
    box-sizing: border-box;
    box-shadow: 0 4px 14px rgba(70, 97, 138, 0.2);
    border-radius: 12px;
}

.icon-cross {
    position: absolute;
    top: 22px;
    right: 22px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    padding: 9px;
    color: $mainColor;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &_img {
        width: 24px;
        height: 24px;
    }

    &:hover {
        transform: scale(1.1);
    }

    &:focus {
        outline: none;
    }
}
</style>
