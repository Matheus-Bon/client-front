'use server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
};

const api = async (url, options = {}) => {
    const config = {
        method: 'GET',
        headers: defaultHeaders,
        ...options,
    };

    const response = await fetch(`${API_BASE_URL}${url}`, config);
    return handleResponse(response);
};

export default api;
