<template>
    <div class="my-4 flex" v-for="item in rowNumber" :key="item">
        <div class="flex mx-6 bg-gray-200 w-3/12 h-8 rounded-xl animate-pulse" v-for="column in 4" :key="column"></div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const { rowNumber } = defineProps({
    rowNumber: { type: Number, default: 8 },
});
</script>

<style lang="scss" scoped></style>
