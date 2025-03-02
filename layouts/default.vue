<template>
  <div class="d-flex bg">
    <BaseSidebar v-if="route.path !== '/auth/login'"></BaseSidebar>
    <el-container class="d-flex">

      <el-header v-if="route.path !== '/auth/login'" class="layout-header" :class="isSidebarCollapsed && ''">
        <BaseHeader />
      </el-header>
      <client-only>
        <el-main class="pa-0" :class="isSidebarCollapsed && route.path !== '/auth/login' ? '' : ''">
          <v-container fluid class="p-0">
            <v-card elevation="0" class="!rounded-2xl !border-[1px] !border-gray-200 mb-2">
              <NuxtPage />
            </v-card>
          </v-container>
        </el-main>
      </client-only>
    </el-container>
  </div>
</template>

<script setup>
import BaseSidebar from "@/components/TheSidebar/BaseSidebar.vue";
import BaseHeader from "@/components/TheHeader/BaseHeader.vue";

const route = useRoute()
const isSidebarCollapsed = useSidebar();
const { t } = useI18n()


errors.value = []

// const token = useCookie('token')
// if (!token.value) {
//   navigateTo('/auth/login')
// }
</script>

<style></style>