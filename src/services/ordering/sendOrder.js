import api from "../api";

const sendOrder = async (body) => {
    const route = `/orders`;
    const options = {
        method: 'PATCH',
        next: {
            tags: ['orders'],
            cache: 'no-store'
        }
    }

    return await api(route, options, body);
}

export default sendOrder;