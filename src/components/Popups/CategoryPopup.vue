<template>
    <ui-popup class="authorization-popup">
        <form class="popup__wrapper" autocomplete="off" @submit.prevent="submit">
            <h2 class="popup__title" v-html="popupTitle" />
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
    </ui-popup>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive } from 'vue';
import { useCategoriesStore } from '@/stores/categories';
import { usePopupStore } from '@/stores/popup';
import UiPopup from '@/components/_common/UI/UiPopup.vue';
import SubmitButton from '@/components/_common/UI/SubmitButton.vue';
import InputField from '@/components/_common/UI/InputField.vue';
import { IInputData } from '@/types/_common/input';
import {
    POPUP_TITLES,
    POPUP_BUTTON_TEXT,
    POPUP_ACTION,
} from '@/const-data/_common/popup';

interface Props {
    name: string;
}

interface State {
    title: IInputData;
    btnText: string;
}

const categoriesStore = useCategoriesStore();
const popupStore = usePopupStore();

const { name } = defineProps<Props>();

const state = reactive<State>({
    title: {
        name: 'title',
        value: '',
        type: 'text',
        placeholder: 'Category title',
        label: 'Category title:',
    },
    btnText: POPUP_BUTTON_TEXT[name],
});

const popupTitle = computed<string>(() => {
    return `${state.btnText} ${POPUP_TITLES.CATEGORY}`;
});

const isDisabled = computed<boolean>(() => {
    return state.title.value === '';
});

async function submit() {
    if (isDisabled.value) {
        return;
    }
    try {
        if (name === POPUP_ACTION.ADD) {
            await categoriesStore.addCategory(state.title.value);
        } else if (name === POPUP_ACTION.EDIT) {
            await categoriesStore.editCategory(state.title.value, popupStore.id);
        }
    } catch (e) {
        console.error(e);
    } finally {
        popupStore.closePopup();
    }
}
</script>

<style lang="scss" scoped></style>
