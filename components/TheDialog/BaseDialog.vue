<template>
    <el-dialog :model-value="props.isDialogOpen" :show-close="false" class="base-dialog" :class="props.class"
        :width="props.width" @close="closeDialog" align-center append-to-body destroy-on-close>
        <template v-if="props.closable" #header="{ close }">
            <h3 class="header">
                {{ props.title }}
                <span @click="
        close();
    closeDialog();
    ">
                    <Icon name="close" />
                </span>
            </h3>
        </template>
        <slot />
        <template #footer v-if="okText || cancelText">
            <div class="footer">
                <BaseButton plain v-if="cancelText" @click="emit('cancelClicked')" class="cancel-btn">
                    {{ cancelText }}
                </BaseButton>
                <BaseButton :loading="props.loading" v-if="okText" @click="emit('okClicked')" class="ok-btn">
                    {{ okText }}
                </BaseButton>
                <slot name="footer"></slot>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import BaseButton from "~/components/TheButton/BaseButton.vue";

const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    isDialogOpen: {
        default: false,
    },
    class: {
        type: String,
    },
    okText: {
        type: String,
        default: "",
    },
    cancelText: {
        type: String,
        default: "",
    },
    closable: {
        type: Boolean,
        default: true,
    },
    loading: {
        type: Boolean,
    },
    width: {
        type: String,
    },
});
const emit = defineEmits([
    "close",
    "okClicked",
    "cancelClicked",
    "update:isDialogOpen",
]);
const closeDialog = () => {
    emit("close");
    emit("update:isDialogOpen", false);
};
</script>

<style></style>
