<template>
    <section class="p-4 w-full" v-if="loading">
        <SkeletonTable />
    </section>
    <BaseTable v-else-if="props.data?.length" :rows="props.data" :actions="props.actions"
        @trigger="emits('trigger', $event)" />
    <NoData v-else />
</template>

<script setup>
import NoData from "@/components/TheEmptyTable/NoData.vue";

// props

const props = defineProps({
    data: {
        type: [Array, null],
        required: true,
    },
    pagination: {
        type: [Object, null],
        required: true,
    },
    loading: {
        type: Boolean,
        required: true,
    },
    actions: []
});

// emits
const emits = defineEmits([
    "onRefetchAddToList",
    "onDeleteRow",
    "onUpdateBaseLoading",
    "onEditAddToList",
    "trigger"
]);


//state

const pagination = ref(null);

//computed

//methods

const onChangeCurrentPage = (event) => {
    emits("onRefetchAddToList", event);
};

// watches

watch(
    () => props.pagination,
    () => {
        pagination.value = props.pagination;
    },
    { immediate: true, deep: true }
);

</script>
