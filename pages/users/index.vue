<template>
    <BaseLayout class="dashboard employees">
        <div class="d-flex action-bar-table col-12 flex-column">
            <div class="d-flex justify-content-between align-items-center">
                <button type="button">
                    {{ t('new') }}
                </button>
                <TheButtonBaseButton class="ms-auto" text size="large" @click="getUsers">
                    <Icon name="refresh-blue" />
                </TheButtonBaseButton>
            </div>
        </div>
        <TheUsersTable :loading="baseLoading" :pagination="pagination" :data="users"
            @onUpdateBaseLoading="baseLoading = $event" />


        <!-- add new poll modal  -->

        <BaseDialog title="Add to list" :isDialogOpen="isNewAddToListVisible" okText="Submit" cancelText="Cancel"
            :loading="isAddToListDialogLoading" class="medium-dialog base-modal" @close="isNewAddToListVisible = false"
            @cancel-clicked="isAddToListDialogLoading = false" @okClicked="onAddAddToListHandler">
            <NewAddToListModal ref="addToList" />
        </BaseDialog>

        <BaseDialog title="Edit" :isDialogOpen="isEditAddToListVisible" okText="Submit" cancelText="Cancel"
            class="new-send-dialog new-competition-dialog" :loading="isEditAddToListLoading"
            @close="isEditAddToListVisible = false" @cancel-clicked="isEditAddToListVisible = false"
            @okClicked="onEditAddToListOkHandler">
            <EditAddToListModal ref="editAddToListRef" :data="stagedItemToEdit" />
        </BaseDialog>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import BaseDialog from "@/components/TheDialog/BaseDialog.vue";
import { useStorage } from '~/stores/useStorage';

import { ref } from "vue";
import UseApi from "~/services/useApi";

//state

const isNewAddToListVisible = ref(false);
const isEditAddToListVisible = ref(false);
const stagedItemToEdit = ref(null)
const isAddToListDialogLoading = ref(false)
const isEditAddToListLoading = ref(false)
const addToList = ref(null)
const pagination = ref(null);
const baseLoading = ref(false);
const editAddToListRef = ref(null)
const users = ref(null)
const { t } = useI18n()

//methods

const onAddAddToListHandler = async () => {
    try {
        const validated = await addToList.value?.submit();
        if (validated) {
            isAddToListDialogLoading.value = true;
            const result = await UseApi.AddToListModule.addListPerCreator({
                ...validated,
            });

            if (result) {
                alert.success("add to list Added successfully");

                isAddToListDialogLoading.value = false;

                getListPerCreator();
            }
            isAddToListDialogLoading.value = false;
            isNewAddToListVisible.value = false
        }
    } catch (error) {
        console.log(error);
        isAddToListDialogLoading.value = false;
    }
}
const getUsers = async () => {
    try {
        baseLoading.value = true;
        const result = await UseApi.Users.getUsers(
            {
                page: pagination.value?.current_page,
            }
        );
        if (result) {
            const columns = [t('name'), t('last_name'), t('status'), t('email')]
            const items = ['first_name', 'last_name', 'status', 'email']
            users.value = formatTableState(columns, result.data, items)
        }
        baseLoading.value = false;
    } catch (error) {
        console.log(error);
    }
}
const onEditAddToListOkHandler = async () => {
    try {
        const validated = await editAddToListRef.value?.submit();

        if (validated) {
            delete validated.creator_id;
            validated.add_to_list_id = JSON.parse(JSON.stringify(validated.id))
            delete validated.id;

            isEditAddToListLoading.value = true;
            const result = await UseApi.AddToListModule.updateListPerCreator({
                ...validated,
            });

            if (result) {
                alert.success("Updated successfully");

                isEditAddToListVisible.value = false;

                getListPerCreator();
            }
            isEditAddToListLoading.value = false;
        }
    } catch (error) {
        console.log(error);
        isEditAddToListLoading.value = false;
    }
};
const onEditAddToList = (event) => {
    isEditAddToListVisible.value = true;
    stagedItemToEdit.value = event;
};


nextTick(() => {
    const { getUserToken } = useStorage();
    console.log(getUserToken);
    getUsers();
});

onMounted(() => {
    console.log(useStorage());
})
</script>
