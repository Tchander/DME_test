<template>
    <popup class="authorization-popup">
        <form class="popup__wrapper" autocomplete="off" @submit.prevent="submit">
            <h2 class="popup__title" v-html="POPUP_TITLES.ADD_SUBCATEGORY" />
            <div class="input-blocks">
                <input-field
                    v-model="state.title.value"
                    class="input-block"
                    :type="state.title.type"
                    :label="state.title.label"
                    :placeholder="state.title.placeholder"
                />
            </div>
            <submit-button
                class="popup__button"
                :btn-text="state.btnText"
                :disabled="isDisabled"
            />
        </form>
    </popup>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useSubcategoriesStore } from '@/stores/subcategories';
import { usePopupStore } from '@/stores/popup';
import Popup from '@/components/_common/UI/Popup.vue';
import SubmitButton from '@/components/_common/UI/SubmitButton.vue';
import InputField from '@/components/_common/UI/InputField.vue';
import { IInputData } from '@/interfaces/_common/Input';
import { POPUP_TITLES } from '@/const-data/_common/titles';

const subcategoriesStore = useSubcategoriesStore();
const popupStore = usePopupStore();

const route = useRoute();

interface State {
    title: IInputData;
    btnText: string;
}

const state = reactive<State>({
    title: {
        name: 'title',
        value: '',
        type: 'text',
        placeholder: 'Subcategory title',
        label: 'Subcategory title:',
    },
    btnText: 'Add',
});

const isDisabled = computed<boolean>(() => {
    return state.title.value === '';
});

async function submit() {
    if (isDisabled.value) {
        return;
    }
    try {
        await subcategoriesStore.addSubcategory(state.title.value, route.params.catId);
    } catch (e) {
        console.error(e);
    } finally {
        popupStore.closePopup();
    }
}
</script>

<style lang="scss" scoped></style>
