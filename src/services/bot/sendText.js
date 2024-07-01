import api from "./api";

const sendText = async (body) => {
    const options = {
        next: {
            cache: 'no-store',
            tags: ['chat_bot']
        }
    }

    return await api(options, body);
}

export default sendText;