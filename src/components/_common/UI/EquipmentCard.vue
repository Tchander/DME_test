<template>
    <div class="card">
        <div class="card__image-wrapper">
            <img class="card__image" :src="image" :alt="title" />
        </div>
        <h4 class="card__title" v-html="title" />
        <p class="card__text" v-html="text" />
    </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
    image?: string;
    title?: string;
    text?: string;
}

const { image, title, text } = withDefaults(defineProps<Props>(), {
    image: '',
    title: 'E1039',
    text: '',
});

// Experimental Reactivity Transform via
// const { image, title = 'E1039', text } = defineProps<Props>();
// doesn't work here
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: 16px 10px;
    box-sizing: border-box;
    border: 1px solid $light-gray;
    min-height: 272px;

    &__image-wrapper {
        margin: 0 auto 20px;
        width: 150px;
        height: 150px;
    }

    &__image {
        width: 100%;
        height: 100%;
    }

    &__title {
        @include font(16, 18, 600);
        margin-bottom: 4px;
    }

    &__text {
        @include font(14, 16.8, 400);
        color: $gray;
    }
}
</style>
