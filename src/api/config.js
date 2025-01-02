import axios from "axios";
import { showToast } from "@/tools/helpers";

axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Default service
 */
const service = axios.create({
    baseURL: import.meta.env.VITE_API
});

service.interceptors.request.use(
    async (request) => {
        return request;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);

// Response Interceptor
service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Extract and show the error message
        const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
        showToast('error', errorMessage)
        return Promise.reject(error);
    }
);

export default service;
