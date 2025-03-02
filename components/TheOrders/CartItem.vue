<template>
    <div class="md:w-auto w-full">
        <div class="h-[100px] w-[100px] rounded-md flex items-center justify-center border-[1px]">
            <img :src="state.index_img" class="h-[70px] w-[70px] rounded-md" />
        </div>
    </div>
    <div class="flex flex-col justify-between md:h-full">
        <p class="text-sm max-w-[400px]">{{ state.product_name }}</p>
        <div class="flex md:items-center justify-between md:flex-row flex-col gap-2 w-full">
            <span
                class="text-[14px] text-primary-b1 md:w-fit w-full md:justify-start justify-between flex items-center gap-1">
                <span class="text-gray-b7">قیمت:</span>
                <div class="flex items-center gap-1">
                    {{ new Intl.NumberFormat('fa-IR').format(+state.total_price) }}
                    <span class="text-gray-b7">تومان</span>
                </div>
            </span>
            <span
                class="text-[14px] text-primary-b1 md:w-fit w-full flex items-center gap-1 md:justify-start justify-between">
                <span class="text-[14px] text-gray-b7">
                    نوع ارسال:
                </span>
                {{ state.send_type_title }}
            </span>
        </div>
    </div>
    <div class="md:w-[200px] w-full flex flex-col md:gap-6 gap-2 justify-between md:h-full">
        <div class="flex items-center gap-2 w-full justify-between">
            <span class="text-[14px] text-gray-b7">
                تعداد:
            </span>
            <div class="flex items-center px-2 rounded-md">
                <input v-model="state.quantity" class="border-none outline-none w-[50px] text-center bg-transparent"
                    disabled />
            </div>
        </div>
        <div class="w-full flex items-center justify-between">
            <span class="text-[14px] text-gray-b7">
                جمع کل
            </span>
            <span class="text-[14px] text-primary-b1">
                {{ new Intl.NumberFormat('fa-IR').format(+state.total_price *
            state.quantity) }}
                <span class="text-gray-b7">تومان</span>
            </span>
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