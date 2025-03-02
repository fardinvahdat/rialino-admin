import { toast } from 'vue3-toastify';

export const alert = {
    success: (message) => {
        toast.success(message)
    },

    error: (message) => {
        toast.error(message)
    }
}