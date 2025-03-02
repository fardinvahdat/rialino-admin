<template>
    <BaseLayout class="dashboard employees">
        <div class="d-flex action-bar-table col-12 flex-column">
            <div class="d-flex justify-content-between align-items-center">
                <TheButtonBaseButton class="ms-auto" text size="large" @click="getOrdersList">
                    <Icon name="refresh-blue" />
                </TheButtonBaseButton>
            </div>
        </div>
        <TheOrdersTable :loading="baseLoading" :pagination="pagination" :data="users"
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

const getOrdersList = async () => {
    try {
        baseLoading.value = true;
        const result = await UseApi.Orders.getOrdersList();
        if (result) {
            result.data.map((item) => {
                return item.name = item.user.first_name + ' ' + item.user.last_name
            })
            const columns = [t('final_price'), t('name'), t('is_paid'), t('created_at'), t('count')]
            const items = ['final_price', 'name', 'paid', 'created_at', 'count']
            users.value = formatTableState(columns, result.data, items)
        }
        baseLoading.value = false;
    } catch (error) {
        console.log(error);
    }
}

const handleTriggerAction = async (e) => {
    switch (e.type) {
        case 'view':
            navigateTo(`/orders/${e.id}`)
            break;

        default:
            break;
    }
}


nextTick(() => {
    getOrdersList();
});
</script>
