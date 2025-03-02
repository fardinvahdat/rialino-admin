<template>
    <BaseLayout class="dashboard employees">
        <div class="d-flex action-bar-table col-12 flex-column">
            <div class="d-flex justify-content-between align-items-center">
                <!-- <button type="button">
                    {{ t('new') }}
                </button> -->
                <TheButtonBaseButton class="ms-auto" text size="large" @click="getLuxuryList">
                    <Icon name="refresh-blue" />
                </TheButtonBaseButton>
            </div>
        </div>
        <ThePurchaseTable :loading="baseLoading" :pagination="pagination" :data="users"
            @onUpdateBaseLoading="baseLoading = $event" :actions="tableActions" @trigger="handleTriggerAction" />
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import { useStorage } from '~/stores/useStorage';
import { ref } from "vue";
import UseApi from "~/services/useApi";

//state

const pagination = ref(null);
const baseLoading = ref(false);
const users = ref(null)
const { t } = useI18n()
const tableActions = [
    {
        label: "مشاهده",
        icon: "chat",
        value: 'view'
    }
]

//methods

const getLuxuryList = async () => {
    try {
        baseLoading.value = true;
        const result = await UseApi.Purchases.getLuxuryList();
        if (result) {
            result.data.map((item) => {
                return item.name = item.users.first_name + ' ' + item.users.last_name
            })
            const columns = [t('title'), t('name'), t('status'), t('created_at')]
            const items = ['title', 'name', 'status', 'created_at']
            users.value = formatTableState(columns, result.data, items)
        }
        baseLoading.value = false;
    } catch (error) {
        console.log(error);
    }
}
const handleTriggerAction = (e) => {
    switch (e.type) {
        case 'view':
            navigateTo(`/conversations/${e.id}`)
            break;

        default:
            break;
    }
}


nextTick(() => {
    getLuxuryList();
});
</script>
