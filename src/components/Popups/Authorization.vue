<template>
    <popup class="authorization-popup">
        <form class="popup__wrapper" autocomplete="off" @submit.prevent="submit">
            <h2 class="popup__title" v-html="POPUP_TITLES.AUTHORIZATION" />
            <div class="input-blocks">
                <input-field
                    v-for="(item, index) in state"
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
                :btn-text="'Войти'"
                :disabled="isDisabled"
            />
        </form>
    </popup>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import Popup from '@/components/_common/UI/Popup.vue';
import SubmitButton from '@/components/_common/UI/SubmitButton.vue';
import InputField from '@/components/_common/UI/InputField.vue';
import { ROUTES } from '@/const-data/_common/routesInfo';
import { POPUP_TITLES } from '@/const-data/_common/titles';

interface InputData {
    name: string;
    value: string;
    type: string;
    placeholder: string;
    label: string;
}

const state = reactive<InputData[]>([
    {
        name: 'login',
        value: '',
        type: 'text',
        placeholder: 'Логин',
        label: 'Логин:',
    },
    {
        name: 'password',
        value: '',
        type: 'password',
        placeholder: 'Пароль',
        label: 'Пароль:',
    },
]);

const router = useRouter();

const isDisabled = computed<boolean>(() => {
    let counter = 0;
    state.forEach((el) => {
        if (el.value !== '') {
            counter++;
        }
    });
    return counter !== state.length;
});

async function submit() {
    if (isDisabled.value) {
        return;
    }
    await router.push({ name: ROUTES.CATALOG.name });
}
</script>

<style lang="scss" scoped>
.popup {
    &__wrapper {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 40px;
    }

    &__title {
        @include font(32, 38, 600);
        text-align: center;
        color: $mainColor;
        margin-bottom: 40px;
    }

    &__button {
        margin-top: 40px;
    }
}

.input-block {
    margin-bottom: 20px;
}
</style>
