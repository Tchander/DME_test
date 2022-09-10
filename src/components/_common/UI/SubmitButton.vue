<template>
    <button class="button" :class="{ disabled }" @click="onClick" v-html="btnText" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { EVENTS_MAPPER } from '@/const-data/_common/emits';

interface Props {
    disabled?: boolean;
    btnText?: string;
}

const { disabled = false, btnText = '' } = defineProps<Props>();

const emit = defineEmits([EVENTS_MAPPER.CLICKED]);

function onClick() {
    emit(EVENTS_MAPPER.CLICKED);
}
</script>

<style lang="scss" scoped>
button {
    position: relative;
    margin: 0;
    padding: 17px 31px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: $beruza;
    color: $white;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    white-space: nowrap;
    @include font(18, 22, 600);
}
.disabled {
    background: $gray-blue;
    cursor: default;
}
</style>
