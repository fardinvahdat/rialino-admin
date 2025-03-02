import {Form, Field} from "vee-validate"
import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

export default defineNuxtPlugin(nuxtApp=> {
    nuxtApp.vueApp.component("ValidateForm", Form)
    nuxtApp.vueApp.component("ValidateField", Field)
})