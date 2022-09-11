<template>
    <div class="input-wrapper">
        <label v-if="label" class="input__label" v-html="props.label" />
        <input
            v-model="model"
            :type="props.type"
            :placeholder="props.placeholder"
            class="input"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';
import { EVENTS_MAPPER } from '@/const-data/_common/emits';

interface Props {
    type: string;
    label?: string;
    placeholder?: string;
    modelValue: string;
}

const props = defineProps<Props>();

const emit = defineEmits([`${EVENTS_MAPPER.UPDATE}:modelValue`]);
const model = computed({
    get: () => props.modelValue,
    set: (value) => emit(`${EVENTS_MAPPER.UPDATE}:modelValue`, value),
});
</script>

<style lang="scss" scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
}

.input {
    @include font(16, 30, 500);
    color: $mainColor;
    width: 100%;
    padding: 10px;
    border: 1px solid $light-gray;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    border-radius: 2px;

    &:focus-visible {
        outline: none;
    }

    &__label {
        @include font(16, 30, 500);
    }
}
</style>
