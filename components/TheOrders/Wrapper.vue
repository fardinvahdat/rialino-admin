<template>
    <div>
        <div class="addresses" v-if="order">
            <section class="">
                <div class="grid md:grid-cols-3 grid-cols-1 gap-2 py-6">
                    <div class="md:col-span-3 col-span-1">

                        <h2 class="font-bold text-xl">سبد خرید</h2>
                        <ul class="w-full pb-10 flex flex-col overflow-y-auto border-b-[1px]">
                            <li v-for="(item, index) in order?.carts" :key="index"
                                class="flex items-center gap-2 w-full py-3 md:flex-nowrap flex-wrap 2xl:justify-evenly lg:justify-around md:justify-between"
                                :class="index !== 0 && 'border-t-[1px]'">
                                <TheOrdersCartItem :state="item" />
                            </li>
                        </ul>
                        <h2 class="font-bold text-xl my-4 mt-10">آدرس </h2>
                        <div>
                            <div class="gap-2 w-full min-h-max text-sm max-w-full grid md:grid-cols-2 grid-cols-1">
                                <TheOrdersAddressCard :state="order.address" />
                                <TheOrdersPriceCard :state="order" />
                            </div>
                        </div>
                        <footer class="flex items-center justify-between pt-6 mt-6 border-t-[1px] border-gray-border">
                            <NuxtLink to="/orders">
                                <BaseButton class="!text-sm">
                                    بازگشت
                                    <Icon name="arrow-left" />
                                </BaseButton>
                            </NuxtLink>
                        </footer>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import UseApi from "~/services/useApi";

const route = useRoute()

const order = ref(null)

const getOrderByID = async () => {
    try {
        const result = await UseApi.Orders.getOrderById(route.params.id);
        if (result) {
            order.value = result.data
        }
    } catch (error) {
        console.log(error)
    }
}

getOrderByID()
</script>