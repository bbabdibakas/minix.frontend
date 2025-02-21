import axios from 'axios';

interface AxiosErrorResponse {
    message?: string | string[];
}

interface AxiosErrorData {
    data?: AxiosErrorResponse;
}

interface CustomAxiosError extends Error {
    response?: AxiosErrorData;
}

export const handleThunkError = (error: unknown): string[] => {
    if (axios.isAxiosError(error)) {
        const responseData = (error as CustomAxiosError).response?.data;
        if (responseData?.message) {
            return Array.isArray(responseData.message)
                ? responseData.message
                : [responseData.message];
        }
    }
    return ['Unknown server error.']; // Default error message
};