<template>
    <div class="equipments">
        <add-new-item
            :popup="POPUP_MAPPER.EQUIPMENT"
            :name="POPUP_ACTION.ADD"
            :title="MENU_TITLES.EQUIPMENTS"
        />
        <div class="equipments__wrapper">
            <search-item v-model="state.searchEquipment" class="equipments__search" />
            <div class="equipments__cards">
                <TransitionGroup name="list">
                    <equipment-card
                        v-for="equipment in filteredEquipments"
                        :key="equipment.equipmentId"
                        v-bind="equipment"
                    />
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useEquipmentsStore } from '@/stores/equipments';
import AddNewItem from '@/components/_common/UI/AddNewItem.vue';
import EquipmentCard from '@/components/_common/UI/EquipmentCard.vue';
import SearchItem from '@/components/_common/UI/SearchItem.vue';
import { IEquipmentData } from '@/types/stores/equipments';
import { MENU_TITLES } from '@/const-data/_common/titles';
import { POPUP_MAPPER, POPUP_ACTION } from '@/const-data/_common/popup';

interface State {
    searchEquipment: string;
}

const state = reactive<State>({
    searchEquipment: '',
});

const equipmentStore = useEquipmentsStore();

const { equipments } = storeToRefs(equipmentStore);

const route = useRoute();

const filteredEquipments = computed<IEquipmentData[]>(() => {
    // Сделал фильтр по тексту, а не заголовку, так как фейковое api не имеет заголовка
    // и он по дефолту одинаковый у всех карточек
    return equipments.value.filter((equipment) => {
        return equipment.text.toLowerCase().includes(state.searchEquipment.toLowerCase());
    });
});

async function getData() {
    await equipmentStore.getEquipments(route?.params?.subcatId);
}

watch(
    () => route?.params?.subcatId,
    async () => {
        await getData();
    },
);

onMounted(async () => {
    await getData();
});
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
    transition: opacity 0.3s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
}

.equipments {
    width: 100%;
    border-right: 1px solid $light-gray;
    border-bottom: 1px solid $light-gray;

    &__wrapper {
        max-height: 100vh;
        overflow: auto;
        border-top: 1px solid $light-gray;
        padding: 10px;

        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-track {
            background: $white;
        }
        &::-webkit-scrollbar-thumb {
            background-color: $beruza;
            border-radius: 1px;
        }
    }

    &__search {
        width: 100%;
        //height: 40px;
        margin-bottom: 10px;
    }

    &__cards {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
