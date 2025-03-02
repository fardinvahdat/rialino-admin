<template>
    <div class="wrapper">
        <div class="info">
            <span @click="handleCollapse" v-if="!isSidebarCollapsed" class="close">
                <Icon name="arrow-left-bg" />
            </span>
            <div class="template-header">
                {{ t('rialino') }}
            </div>
            <span class="d-none d-md-inline">|</span>
            <div class="date">
                <Icon name="calendar" />
                {{ today }}
            </div>
        </div>
        <div class="actions flex !items-center">
            <el-button text @click="goToHome" :loading="isLoadingHome">
                <v-icon v-if="!isLoadingHome">mdi-home</v-icon>
            </el-button>

            <el-avatar :src="userInfo.avatar" />
        </div>
    </div>
</template>


<script setup>
import { ref } from "vue";
const userInfo = ref({
    avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
});
const { t } = useI18n()

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
let today = new Date();
today = today.toLocaleDateString("fa-IR", options);
const isSidebarCollapsed = useSidebar();
const handleCollapse = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

const isLoadingHome = ref(false)
const goToHome = async () => {}
</script>

<style></style>