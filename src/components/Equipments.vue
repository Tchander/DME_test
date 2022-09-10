<template>
    <div class="equipments">
        <add-new-item :title="MENU_TITLES.EQUIPMENTS" />
        <div class="equipments__wrapper">
            <div class="equipments__search"></div>
            <div class="equipments__cards">
                <equipment-card
                    v-for="equipment in equipments"
                    :key="equipment.equipmentId"
                    v-bind="equipment"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useEquipmentsStore } from '@/stores/equipments';
import AddNewItem from '@/components/_common/UI/AddNewItem.vue';
import EquipmentCard from '@/components/_common/UI/EquipmentCard.vue';
import { MENU_TITLES } from '@/const-data/_common/titles';

const equipmentStore = useEquipmentsStore();

const { equipments } = storeToRefs(equipmentStore);

const route = useRoute();

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
        // Пока что плейсхолдер
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
    }

    &__cards {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
