<template>
    <popup class="authorization-popup">
        <form class="popup__wrapper" autocomplete="off" @submit.prevent="submit">
            <h2 class="popup__title" v-html="POPUP_TITLES.ADD_EQUIPMENT" />
            <div class="input-blocks">
                <input-field
                    v-model="state.text.value"
                    class="input-block"
                    :type="state.text.type"
                    :label="state.text.label"
                    :placeholder="state.text.placeholder"
                />
                <input-field
                    v-model="state.image.value"
                    class="input-block"
                    :type="state.image.type"
                    :label="state.image.label"
                    :placeholder="state.image.placeholder"
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
import { useEquipmentsStore } from '@/stores/equipments';
import { usePopupStore } from '@/stores/popup';
import Popup from '@/components/_common/UI/Popup.vue';
import SubmitButton from '@/components/_common/UI/SubmitButton.vue';
import InputField from '@/components/_common/UI/InputField.vue';
import { IInputData } from '@/interfaces/_common/Input';
import { POPUP_TITLES } from '@/const-data/_common/titles';

const equipmentStore = useEquipmentsStore();
const popupStore = usePopupStore();

const route = useRoute();

interface State {
    text: IInputData;
    image: IInputData;
    btnText: string;
}

const state = reactive<State>({
    text: {
        name: 'text',
        value: '',
        type: 'text',
        placeholder: 'Equipment text',
        label: 'Equipment text:',
    },
    image: {
        name: 'image',
        value: '',
        type: 'text',
        placeholder: 'Image link',
        label: 'Image link:',
    },
    btnText: 'Add',
});

const isDisabled = computed<boolean>(() => {
    return state.text.value === '' || state.image.value === '';
});

async function submit() {
    if (isDisabled.value) {
        return;
    }
    try {
        await equipmentStore.addEquipment(
            state.text.value,
            state.image.value,
            route.params.subcatId,
        );
    } catch (e) {
        console.error(e);
    } finally {
        popupStore.closePopup();
    }
}
</script>

<style lang="scss" scoped></style>
