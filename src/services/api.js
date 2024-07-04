'use server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const api = async (url, options = {}, body) => {
    const config = {
        method: 'GET',
        headers: defaultHeaders,
        ...options,
        body: JSON.stringify(body)
    };

    const response = await fetch(`${API_BASE_URL}${url}`, config);
    const { status, statusCode, data, message } = await response.json();

    return { status, statusCode, data, message };
};

export default api;
