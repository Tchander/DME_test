<template>
    <div class="search-wrapper">
        <input
            v-model="model"
            type="text"
            class="search"
            placeholder="Search category or HCPCS name "
        />
        <search-icon class="search__icon" />
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, computed } from 'vue';
import SearchIcon from '@/components/_common/SvgTemplates/SearchIcon.vue';
import { EVENTS_MAPPER } from '@/const-data/_common/emits';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits([`${EVENTS_MAPPER.UPDATE}:modelValue`]);
const model = computed({
    get: () => props.modelValue,
    set: (value) => emit(`${EVENTS_MAPPER.UPDATE}:modelValue`, value),
});
</script>

<style lang="scss" scoped>
.search-wrapper {
    position: relative;
    padding: 5px 5px 5px 40px;
    border: 1px solid $light-gray;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    border-radius: 2px;
}

.search {
    @include font(16, 30, 500);
    color: $mainColor;
    width: 100%;

    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        color: $gray-blue;
    }

    &__icon {
        position: absolute;
        top: 7px;
        left: 10px;
        width: 24px;
        height: 24px;
    }
}
</style>
