<template>
    <ui-popup class="authorization-popup">
        <form class="popup__wrapper" autocomplete="off" @submit.prevent="submit">
            <h2 class="popup__title" v-html="POPUP_TITLES.AUTHORIZATION" />
            <div class="input-blocks">
                <input-field
                    v-for="(item, index) in state.inputList"
                    :key="index"
                    v-model="item.value"
                    class="input-block"
                    :type="item.type"
                    :label="item.label"
                    :placeholder="item.placeholder"
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
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import UiPopup from '@/components/_common/UI/UiPopup.vue';
import SubmitButton from '@/components/_common/UI/SubmitButton.vue';
import InputField from '@/components/_common/UI/InputField.vue';
import { IInputData } from '@/types/_common/input';
import { ROUTES } from '@/const-data/_common/routesInfo';
import { POPUP_TITLES } from '@/const-data/_common/popup';

interface State {
    inputList: IInputData[];
    btnText: string;
}

const state = reactive<State>({
    inputList: [
        {
            name: 'login',
            value: '',
            type: 'text',
            placeholder: 'Login',
            label: 'Login:',
        },
        {
            name: 'password',
            value: '',
            type: 'password',
            placeholder: 'Password',
            label: 'Password:',
        },
    ],
    btnText: 'Log in',
});

const router = useRouter();

const isDisabled = computed<boolean>(() => {
    let counter = 0;
    state.inputList.forEach((el) => {
        if (el.value !== '') {
            counter++;
        }
    });
    return counter !== state.inputList.length;
});

async function submit() {
    if (isDisabled.value) {
        return;
    }
    await router.push({ name: ROUTES.CATALOG.name });
}
</script>

<style lang="scss" scoped>
.input-block {
    margin-bottom: 20px;
}
</style>
