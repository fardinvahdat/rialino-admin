<template>
    <BaseLayout class="dashboard employees">
        <template v-if="!baseLoading">
            <h1 class="font-semibold text-2xl mb-4">{{ t('users') }}</h1>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-8">
                <div class="p-5 rounded-xl border-[1px] flex items-center justify-between">
                    <span>{{ t('total_user') }}</span>
                    <span>{{ dashboard?.information.users.filter((user) => user.key == 'total_user')[0].value }} </span>
                </div>
                <div class="p-5 rounded-xl border-[1px] flex items-center justify-between">
                    <span>{{ t('total_user_today') }}</span>
                    <span>{{ dashboard?.information.users.filter((user) => user.key == 'total_user_today')[0].value }}
                    </span>
                </div>
            </div>
            <h1 class="font-semibold text-2xl mb-4">{{ t('searchs') }}</h1>
            <div class="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-8">
                <div class="p-5 rounded-xl border-[1px] flex items-center justify-between">
                    <span>{{ t('total_search') }}</span>
                    <span>{{ dashboard?.information.search.filter((user) => user.key == 'total_search')[0].value }}
                    </span>
                </div>
                <div class="p-5 rounded-xl border-[1px] flex items-center justify-between">
                    <span>{{ t('total_search_today') }}</span>
                    <span>{{ dashboard?.information.search.filter((user) => user.key == 'total_search_today')[0].value
                        }}
                    </span>
                </div>
                <div class="p-5 rounded-xl border-[1px] flex items-center justify-between">
                    <span>{{ t('total_search_month') }}</span>
                    <span>{{ dashboard?.information.search.filter((user) => user.key == 'total_search_month')[0].value
                        }}
                    </span>
                </div>
                <div class="p-5 rounded-xl border-[1px] flex items-center justify-between">
                    <span>{{ t('total_search_request') }}</span>
                    <span>{{ dashboard?.information.search.filter((user) => user.key == 'total_search_request')[0].value
                        }}
                    </span>
                </div>


            </div>
        </template>
        <template v-else>
            <SkeletonTable :rowNumber="1" />
            <SkeletonTable :rowNumber="1" />
        </template>



    </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import UseApi from "~/services/useApi";

//state

const pagination = ref(null);
const baseLoading = ref(false);
const dashboard = ref(null)
const { t } = useI18n()

//methods


const getDashboard = async () => {
    try {
        baseLoading.value = true;
        const result = await UseApi.Dashboard.Dashboard(
            {
                page: pagination.value?.current_page,
            }
        );
        if (result) {
            console.log(result);
            dashboard.value = result.data
        }
        baseLoading.value = false;
    } catch (error) {
        console.log(error);
    }
}



nextTick(() => {
    getDashboard();
});
</script>
