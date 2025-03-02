<template>
    <BaseLayout class="dashboard employees">
        <div class="relative">

            <ul class="p-2 chat flex flex-col gap-2 h-full overflow-y-auto pb-2 max-h-[550px] min-h-[450px]">
                <li v-for="(item, index) in list" :key="index"
                    class="rounded-md max-w-[80%] md:text-[14px] text-sm relative bg-gray-200 bg-opacity-70 text-gray-b7 p-2"
                    :class="item.answered_admin ? 'mr-auto rounded-bl-none' : 'ml-auto rounded-br-none'">
                    {{
                    item.content }}
                    <ul v-if="item.files.length" class="flex items-center gap-2 images">
                        <li v-for="(file, i) in item.files" :key="i" class="!p-0 cursor-pointer relative">
                            <a target="_blank" :href="file.path">
                                <img :src="file.path" class="h-10 w-10 rounded-md">
                            </a>
                        </li>
                    </ul>
                    <p class="text-xs mt-2 text-end">{{ item.created_at }}</p>
                </li>
            </ul>

            <form class="sticky bottom-0 left-0 w-full h-12 p-2 flex items-center gap-2 border-t-2 bg-gray-l3"
                @submit.prevent="handleSendMessage">
                <div>
                    <button
                        class="border-primary-b1 border-2 hover:bg-primary-b1 !text-primary-600  hover:!text-[#fff] md:h-[42px] md:w-[42px] md:min-w-[42px] w-8 h-8 !px-0 border-solid rounded-full flex items-center justify-center"
                        type="submit" :disabled="isSendingLoading">
                        <Icon name="send-sms" class="md:h-[17px] !h-3 !w-3 md:w-[17px]" v-if="!isSendingLoading" />
                        <BaseLoading v-else color="#fff" />
                    </button>
                </div>
                <input v-model="message.content" type="text" placeholder="تایپ کنید"
                    class="w-full py-[10px] px-3 mt-1 text-right rounded-md border-none outline-none focus:border-black text-base" />
                <div>
                    <button type="button" @click="attachFileRef.click()" class="relative">
                        <span v-if="message.file_ids.length"
                            class="absolute bg-primary-b1 h-4 w-4 text-white rounded-full text-xs flex items-center justify-center bg-opacity-95 -top-1 -right-1">{{
                    message.file_ids.length }}</span>
                        <Icon name="attach-file" class="h-6 w-6" />
                        <input ref="attachFileRef" type="file" multiple accept="image/*" @change="handleFileSelect"
                            hidden>
                    </button>
                </div>
            </form>
        </div>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/TheBasePanelLayout/BaseLayout.vue";
import { ref } from "vue";
import UseApi from "~/services/useApi";

//state

const pagination = ref(null);
const baseLoading = ref(false);
const list = ref(null)
const { t } = useI18n()
const route = useRoute()
const message = ref({
    content: '',
    file_ids: [],
    type: 'text'
})
const isSendingLoading = ref(false)
const attachFileRef = ref(null)
const files = ref([])
const token = useCookie('token')

//methods

const getMessagesList = async () => {
    try {
        baseLoading.value = true;
        const result = await UseApi.Purchases.getConversationById(route.params.id);
        if (result) {
            list.value = result.data.reverse()
        }
    } catch (error) {
        console.log(error);
    } finally {
        baseLoading.value = false;
    }
}
const handleSendMessage = async () => {
    isSendingLoading.value = true
    console.log(message.value);
    try {
        baseLoading.value = true;
        const result = await UseApi.Purchases.storeConversation(route.params.id, { ...message.value });
        ElNotification({
            title: '',
            message: result.message,
            type: 'success',
        })
        message.value = {
            content: '',
            file_ids: [],
            type: 'text'
        }
        if (result) {
            getMessagesList()
        }
    } catch (err) {
        console.log('error', err)
        ElNotification({
            title: 'ناموفق',
            message: err.data?.data.message || 'Search failed',
            type: 'error',
        })
    } finally {
        isSendingLoading.value = false
    }
}
const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files).slice(0, 5); // Limit to 5 files
    files.value = selectedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        progress: 0,
        name: file.name,
        size: file.size,
        id: Math.round(Math.random() * 1298730000647)
    }));

    // Upload files
    files.value.forEach((file, index) => {
        uploadFile(file, index);
    });
};
const uploadFile = async (file, index) => {
    const formData = new FormData();
    formData.append('file', file.file);
    formData.append('type', "purchase");

    try {
        const response = await handleUploadImageWithPercentage(token.value, formData, (progress) => {
            // Update progress in real-time
            files.value[index].progress = progress;
        });

        // Handle successful upload
        console.log('Upload response:', response);
        files.value[index].progress = 100; // Mark as fully uploaded
        files.value[index].preview = response.data.path
        message.value.file_ids.push(response.data.id)
    } catch (error) {
        console.error('Upload failed:', error);
        files.value[index].progress = -1; // Mark as failed
    }
};

nextTick(() => {
    getMessagesList();
});
</script>
