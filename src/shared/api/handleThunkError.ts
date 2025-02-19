import axios from "axios";

export const handleThunkError = (error: unknown): string[] => {
    if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
            return Array.isArray(error.response.data.message)
                ? error.response.data.message
                : [error.response.data.message];
        }
    }
    return ['Unknown server error.']; // Default error message
};
