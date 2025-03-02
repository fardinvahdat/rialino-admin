<template>
    <div class="flex flex-col justify-center md:max-w-[300px] mx-auto w-full md:gap-6 gap-2 md:mt-0 mt-6">
        <div class="border-[1px] border-gray-border h-10 rounded-md flex items-center justify-between px-6 w-full">
            <span>مجموع</span>
            <span class="text-primary-b1">{{ new Intl.NumberFormat('fa-IR').format(
                state?.total_price,
            ) }}</span>
        </div>
        <div v-if="false" class="border-[1px] border-gray-border h-10 rounded-md flex items-center justify-between px-6 w-full">
            <span>تخفیف</span>
            <span class="text-gray-b2">{{ new Intl.NumberFormat('fa-IR').format(
                state?.discount,
            ) }}</span>
        </div>
        <div class="border-[1px] border-gray-border h-10 rounded-md flex items-center justify-between px-6 w-full">
            <span>مبلغ قابل پرداخت</span>
            <span class="text-primary-b1">{{ new Intl.NumberFormat('fa-IR').format(
                state?.final_price,
                ) }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: null
    }
})
</script>