<template>
    <div class="tac base-sidebar row" :class="isCollapsed ? 'open' : 'close'">
        <div class="w-100 col-12 wrapper">
            <h5 class="mb-2 header d-flex items-center justify-content-between">
                <span @click="handleCollapse">
                    <Icon name="arrow-left-bg" />
                </span>
            </h5>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <div v-for="(menuItem, index) in menuItems" :key="index">
                    <el-sub-menu :index="index + 1 + ''" v-if="menuItem.children.length">
                        <template #title>
                            <span :key="counter" class="flex w-full">
                                <Icon :name="menuItem.icon" />
                                <span class="font-normal sm:font-medium text-xs sm:text-sm lg:text-base ">{{
                                    menuItem.title }}</span>
                            </span>
                        </template>
                        <el-menu-item-group>
                            <template v-for="(subMenuItem, subMenuIndex) in menuItem.children" :key="subMenuIndex">
                                <NuxtLink :to="subMenuItem.route" @click="handleCollapse">
                                    <el-menu-item :index="index + 1 + ' - ' + (subMenuIndex + 1)"
                                        class="ferr !font-normal !sm:font-medium !text-xs sm:!text-sm !lg:text-base">
                                        <span class="circle"></span>
                                        {{ subMenuItem.title }}
                                    </el-menu-item>
                                </NuxtLink>
                            </template>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item :index="index + 1 + ''" v-if="!menuItem.children.length" class="far">
                        <NuxtLink :to="menuItem.route" @click="handleCollapse"
                            class="w-full h-full flex items-center gap-2">
                            <Icon :name="menuItem.icon" />
                            <span class="font-normal sm:font-medium text-xs sm:text-sm lg:text-base">{{ menuItem.title
                                }}</span>
                        </NuxtLink>
                    </el-menu-item>
                </div>

                <el-menu-item @click="logoutDialog = true">
                    <Icon name="exit" />
                    <span class="font-normal sm:font-medium text-xs sm:text-sm lg:text-base">{{ t('exit') }}</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>

    <v-dialog v-model="logoutDialog" persistent width="600">
        <v-card>
            <v-card-title>
                {{ t('are_you_sure') }}
            </v-card-title>
            <v-card-actions>
                <v-btn @click="logoutDialog = false">{{ t('no') }}</v-btn>
                <v-btn variant="outlined" class=" !h-12 !rounded-[10px] !text-light px-8" @click="logout()">{{ t('yes')
                    }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useStorage } from '~/stores/useStorage';

const { updateToken } = useStorage()
//import icons

import { useAuthStore } from "../../store/auth";

//state
const { t } = useI18n()

const logoutDialog = ref(false)
const logout = () => {
    updateToken(null)
    reloadNuxtApp({
        path: '/auth/login',
        ttl: 1000, // default 10000
    });
}

const isCollapsed = useSidebar();
const menuItems = ref([
    {
        title: t('dashboard'),
        route: "/dashboard",
        icon: "dashboard",
        children: [],
    },
    {
        title: t('users'),
        route: "/users",
        icon: "users",
        children: [],
    },
    {
        title: t('purchases'),
        route: "/",
        icon: "purchase",
        children: [
            {
                title: t("bulk"),
                route: "/conversations/bulk",
            },
            {
                title: t("luxury"),
                route: "/conversations/luxury",
            },
        ]
    },
    {
        title: t('orders'),
        route: "/orders",
        icon: "orders",
        children: [],
    },
]);
const counter = ref(0);

//methods

const handleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
};
const handleOpen = (key, keyPath) => {
    menuItems.value[key - 1].icon += "-blue";
    counter.value++;
};
const handleClose = (key, keyPath) => {
    menuItems.value[key - 1].icon = menuItems.value[key - 1].icon.replace(
        "-blue",
        ""
    );
    counter.value++;
};

const authStore = useAuthStore()
const hasRole = (role) => {
    const user = authStore.getUserInfo
    if (user) {
        const roles = user.roles
        if (roles) {
            const find = roles.find(item => {
                const find2 = role.find(sub => sub == item)
                if (find2) {
                    return true
                }
            })
            return find ? true : false
        }
    }
    return false
}
const hasPermission = (permission) => {
    const user = authStore.getUserInfo
    if (user) {
        const permissions = user.permissions
        if (permissions) {
            const find = permissions.find(item => item == permission)
            return find ? true : false
        }
    }
    return false
}

const checkSubMenu = (subMenuItem) => {
    if (subMenuItem.permission) {
        if (hasPermission(subMenuItem.permission)) {
            return true
        } else
            return false
    }
    else if (subMenuItem.permission) {
        if (hasRole(subMenuItem.role)) {
            return true
        } else
            return false
    }
    return true
}

onMounted(() => {
    if (process.client) {
        if (window.innerWidth < 992) { isCollapsed.value = false } else isCollapsed.value = true
    }
})

//test
</script>
