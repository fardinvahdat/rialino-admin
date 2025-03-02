<template>
    <el-dialog v-model="visible" align-center @close="emits('close')">
        <slot />
    </el-dialog>
</template>

<script setup>
const props = defineProps({
    visible: {
        default: false
    },
})

const visible = ref(
    false
)

const emits = defineEmits(['close'])

watch(props, (newValue) => {
    newValue.visible && (visible.value = newValue.visible)
})
</script>