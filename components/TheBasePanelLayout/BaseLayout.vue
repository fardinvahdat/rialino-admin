<template>
    <div class="base-layout-wrapper" :key="counter">
        <div class="" :key="counter">
            <div class="breadcrumbs col-12 !flex justify-start flex-row-reverse !w-full" :key="counter">
                <el-skeleton style="width: 20%; display: flex;" :rows="1" :loading="isLoading" animated>

                    <span v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="breadcrumb !flex flex-row-reverse items-center">{{
        breadcrumb.title }}
                        <Icon name="arrow-right" v-if="isArrowAllowed(index)" />
                    </span>
                </el-skeleton>
            </div>

        </div>
        <div class="wrapper col12">
            <client-only>
                <slot></slot>
            </client-only>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

//state

const breadcrumbs = reactive([]);
const route = useRoute();
const counter = ref(0);
const isLoading = ref(true);

//mounted

onMounted(() => {
    let fullPath = route.path.split("/").slice(1);
    fullPath.forEach((path) => {
        breadcrumbs.push({
            route: "",
            title: path.charAt(0).toUpperCase() + path.slice(1),
        });
    });
    counter.value++;
    isLoading.value = false
});

//methods

const isArrowAllowed = (index) => {
    if (index == breadcrumbs.length - 1) return false;
    return true;
};
</script>

<style></style>