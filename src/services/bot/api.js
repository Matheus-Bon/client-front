'use server'

const API_BASE_URL = process.env.API_BOT_URL;

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const api = async (options = {}, body) => {
    const config = {
        method: 'GET',
        headers: defaultHeaders,
        ...options,
        body: JSON.stringify(body)
    };

    const response = await fetch(`${API_BASE_URL}/chat-bot-api`, config);
    const { error, data } = await response.json();

    if (error) {
        throw new Error(error);
    }

    return data;
};

export default api;
