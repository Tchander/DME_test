<template>
    <transition name="fade">
        <div>
            <component :is="currentPopup" v-if="popup" v-bind="popupMeta" />
        </div>
    </transition>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { usePopupStore } from '@/stores/popup';
import { popupsMapper } from '@/helpers/popups';

const popupStore = usePopupStore();
const { popup, popupMeta } = storeToRefs(popupStore);

const currentPopup = computed(() => {
    if (popup.value) {
        return defineAsyncComponent(() => popupsMapper(popup.value));
    }
    return null;
});
</script>

<style lang="scss" scoped>
@include animateFade();
</style>
