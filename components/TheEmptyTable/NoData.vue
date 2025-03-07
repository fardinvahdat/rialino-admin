<template>
    <div class="no-data w-100 md:text-base text-sm">دیتا ثبت شده ای وجود ندارد!</div>
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
