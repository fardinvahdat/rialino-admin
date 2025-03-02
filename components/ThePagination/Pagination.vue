<template>
    <section class="y-pagination d-flex justify-content-between align-items-center">
        <div class="align-items-center d-flex">
            <section class="y-pagination-input-container d-inline-block">
                <el-pagination :page-size="itemPerPage" :pager-count="5" :total="total" layout="prev, pager, next"
                    @current-change="changeHandler" :current-page="currentPage" :prev-icon="ArrowLeft"
                    :next-icon="ArrowRight" />
            </section>
            <!--      <section class="d-inline rows">-->
            <!--        <span>Rows : </span>-->
            <!--        <select-->
            <!--          v-model="selectedValue"-->
            <!--          @change="changeSelected(selectedValue)"-->
            <!--          class="y-pagination-select"-->
            <!--          :suffix-icon="ArrowRight"-->
            <!--        >-->
            <!--          <option-->
            <!--            v-for="(option, key) in ippOptions"-->
            <!--            :key="key"-->
            <!--            :value="option.value"-->
            <!--          >-->
            <!--            {{ option.value }}-->
            <!--          </option>-->
            <!--        </select>-->
            <!--      </section>-->

            <!--      <el-pagination-->
            <!--        :current-page="selectedValue"-->
            <!--        :page-size="itemPerPage"-->
            <!--        layout="total, prev, pager, next"-->
            <!--        :pager-count="5"-->
            <!--        :total="pageCount"-->
            <!--      />-->

        </div>

        <span class="y-pagination-text">{{
                    `Page ${currentPage} of ${Math.ceil(total / itemPerPage)}`
            }}</span>
    </section>
</template>

<script setup>
import { defineProps, ref, defineEmits, computed, watch } from "vue";
import ArrowLeft from "@/components/TheIcon/single-icons/ArrowLeft.vue";
import ArrowRight from "@/components/TheIcon/single-icons/ArrowRight.vue";

//props

const props = defineProps({
    total: {
        type: Number,
    },
    itemPerPage: {
        type: Number,
    },
    currentPage: {
        type: Number,
    },
});

//state

const selectedValue = ref(5);
const jumpPage = ref(1);
const ippOptions = ref([
    {
        value: 5,
        text: "5",
    },
    {
        value: 20,
        text: "50",
    },
    {
        value: 50,
        text: "50",
    },
    {
        value: 100,
        text: "100",
    },
]);

// emits

const emit = defineEmits(["currentPage"]);

// methods

const jumpToPage = () => {
    if (jumpPage.value > pageCount.value) {
        jumpPage.value = pageCount.value;
    }
    emit("currentPage", parseInt(jumpPage.value, 10));
};
const changeSelected = (val) => {
    selectedValue.value = val;
    emit("itemPerPage", val);
};
const filterInput = (e) => {
    const charCode = e.charCode;
    if (charCode !== 43 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
    }
};
const changeHandler = (e) => {
    emit("changeHandler", e);
    emit("currentPage", e);
    jumpPage.value = e;
};

const pageCount = computed(() => {
    return props.total ? Math.ceil(props.total / props.itemPerPage) : 1;
});
const paginationDate = computed(() => {
    const start = selectedValue.value * ippOptions.value;
    const end = start + ippOptions.value;
    return props.total.slice(start, end);
});

// watch

watch(
    () => props.currentPage,
    (val) => {
        jumpPage.value = val;
    }
);
</script>
