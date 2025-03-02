<script setup lang="ts">

interface IProps {
    icon?: string,
    plain?: boolean,
    text?: boolean
    type?: string
}
const props = withDefaults(defineProps<IProps>(), {
    type: 'primary'
})
</script>

<template>
    <ElButton v-bind="props">
        <slot />
    </ElButton>
</template>

<style lang="scss" scoped>
.el-button {
    @apply rounded-xl;
}

.el-button.is-plain {
    @apply text-sm text-primary-500 bg-transparent border-2 border-primary-500 hover:bg-primary-500/10;
}

.el-button.is-text {
    @apply fill-primary-500;
}
</style>