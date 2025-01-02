import { useToast } from 'vue-toast-notification'

/**
 * Show toast
 * Available statuses:
 * success, info, warning, error, default
 */
const showToast = (status, errorMessage) => {
    const toast = useToast()
    toast.open({
        message: errorMessage,
        type: status,
        duration: 5000
    })
}

export { showToast }
