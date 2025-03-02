<template>
    <div class="flex justify-between border-[1px] rounded-md p-2 flex-col h-max gap-2">
        <div class="flex items-center gap-1 md:text-base text-sm">
            <Icon name="location" class="h-5 min-w-5 w-5" />
            <p class="overflow-hidden whitespace-normal">
                {{ state.neighborhood }}
            </p>
        </div>
        <p class="flex items-center gap-1 text-xs">
            <Icon name="user" class="h-5 w-5" /> {{
                    `${state.recipient?.first_name} ${state.recipient?.last_name}`
                }}
        </p>
        <p class="flex items-center gap-1 text-xs">
            <Icon name="calling" class="h-5 w-5" /> {{ state.recipient?.mobile }}
        </p>
        <p class="flex items-center gap-1 text-xs">
            <Icon name="postal-code" class="h-5 w-5" /> {{ state.postal_code }}
        </p>
        <p class="flex items-center gap-1 text-xs">
            <Icon name="addresses" class="h-5 w-5" /> {{ state.unit }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: null
    }
})
</script>