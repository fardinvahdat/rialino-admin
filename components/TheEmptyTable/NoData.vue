<template>
    <div class="no-data w-100">There are no {{ props.name }} available</div>
</template>

<script setup>
// props
const props = defineProps({
    name: {
        type: String,
        default: "records",
    },
});
</script>
