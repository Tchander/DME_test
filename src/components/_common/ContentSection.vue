<template>
    <section class="section">
        <div class="section__content">
            <slot />
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.section {
    padding: 0 20px;

    &__content {
        position: relative;
        height: 100%;
        max-width: 1182px;
        z-index: 1;
        margin: 0 auto;
    }
}
</style>
