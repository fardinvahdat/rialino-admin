<template>
    <section class="block md:grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-5 min-h-screen" dir="rtl">
        <section class="p-3 md:hidden mb-6">
            <!-- <img src="https://api.webteamwork.ca/ms-bms/storage/logo/logo.png" class="w-24 mx-auto"> -->
            <h1 class="text-2xl text-center font-extrabold">Logo</h1>

        </section>
        <section class="lg:col-span-2 relative hidden md:flex items-center justify-center">
            <div class="el-image absolute left-0 top-0 h-full w-full">
                <img src="https://bms.webteamwork.ca/assets/images/login/background.png" class="el-image__inner">
            </div>
            <section class="relative p-10 z-10">
                <h1 class="text-2xl text-center font-extrabold">Logo</h1>
                <h1 class="mt-6 font-light xl:text-[40px] lg:text-xl text-black">{{ t('welcome_to') }}
                    <b class="font-bold text-[#1085d3]">{{ t('rialino') }}</b>
                </h1>
            </section>
        </section>
        <section class="md:col-span-2 lg:col-span-3 flex items-center justify-center">
            <section class="max-w-[600px] md:min-w-[500px]">
                <section class="container">
                    <h1 class="text-3xl font-black text-right">{{ t('login') }}</h1>
                    <p class="mt-2 font-normal text-sm text-right"> {{ t('do_not_have_an_account') }}
                        <a href="javascript:void(0)" class="text-primary-b1 hover-animation">{{ t('register') }} </a>
                    </p>
                    <form class="space-y-4" @submit.prevent="handleLogin">
                        <section class="mt-10 sample-form grid grid-cols-1 gap-8">
                            <section class="form-item" style="transform: translateZ(0px); opacity: 1;">
                                <div class="form-control w-full">
                                    <label class=" block capitalize text-right">
                                        <span>{{ t('email') }}
                                        </span>
                                    </label>
                                    <el-form-item v-bind="emailProps">
                                        <input
                                            class="w-full rounded-lg border-[1px] border-black border-solid outline-none px-2 h-10 text-right"
                                            :placeholder="t('email')" type="email" v-model="email" />
                                    </el-form-item>
                                </div>
                                <div class="form-control w-full mt-4">
                                    <label class=" block capitalize text-right">
                                        <span>{{ t('password') }}
                                        </span>
                                    </label>
                                    <el-form-item v-bind="passwordProps">
                                        <input
                                            class="w-full rounded-lg border-[1px] border-black border-solid outline-none px-2 h-10 text-right"
                                            :placeholder="t('password')" type="password" v-model="password" />
                                    </el-form-item>
                                </div>
                                <section class="mt-4 flex  items-center justify-between">
                                    <!-- <span class="el-checkbox__label">{{ t('remember_me') }}</span> -->
                                    <a href="javascript:void(0)"
                                        class="text-xs md:text-sm font-normal hover-animation">{{ t('forget_password')
                                        }}</a>
                                </section>
                            </section>
                            <section class="form-item">
                                <button type="submit"
                                    class="el-button btn btn-primary w-full animate__animated animate__jello hover:bg-Success-b3 !h-10">
                                    <span class="">{{ !loading ? t('login') : t('proccessing') }}
                                    </span>
                                </button>
                            </section>
                        </section>
                    </form>
                </section>
            </section>
        </section>
    </section>
</template>

<script setup>
import { useLogin } from "~/validator/auth";
import { useStorage } from '~/stores/useStorage';
const { updateToken } = useStorage()
import UseApi from "~/services/useApi";
const { defineField, handleSubmit } = useForm({
    validationSchema: useLogin,
});
import { useForm } from "vee-validate";
const [email, emailProps] = defineField("email", config);
const [password, passwordProps] = defineField("password", config);
const loading = ref(false)
import { ElMessage } from 'element-plus'
const { t } = useI18n()



const login = async () => {
    try {
        loading.value = true;
        const result = await UseApi.Auth.login(
            {
                email: email.value,
                password: password.value
            },
        );
        if (result) {
            if (result.data.token) {

                updateToken(result.data.token)
                ElMessage({
                    message: t('login_successfully'),
                    type: 'success',
                })
                setTimeout(() => {

                    reloadNuxtApp({
                        path: '/dashboard',
                        ttl: 1000, // default 10000
                    });
                }, 300);
            }

        }
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}

const handleLogin = handleSubmit((values) => {
    if (values) {
        login()
    }
});

</script>