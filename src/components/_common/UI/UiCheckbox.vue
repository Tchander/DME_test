<template>
    <input v-model="model" type="checkbox" class="input" />
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';
import { EVENTS_MAPPER } from '@/const-data/_common/emits';

interface Props {
    modelValue: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits([`${EVENTS_MAPPER.UPDATE}:modelValue`]);
const model = computed({
    get: () => props.modelValue,
    set: (value) => emit(`${EVENTS_MAPPER.UPDATE}:modelValue`, value),
});
</script>

<style lang="scss" scoped>
.input {
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 2px solid $light-gray;
    cursor: pointer;

    &:focus-visible {
        outline: none;
    }
}
</style>
