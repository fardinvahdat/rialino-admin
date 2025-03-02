import * as yup from "yup";
import login from '../locales/login.json'

export const useLogin = yup.object({
    email: yup.string().email(login.email_format_not_valid).required(login.email_required),
    password: yup.string().required(login.password_required),
})