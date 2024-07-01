import api from "../api";

const getUserById = async (id) => {
    const route = `/users/${id}`;
    const options = {
        next: {
            tags: ['users', 'one_user']
        }
    }

    return await api(route, options);
}

export default getUserById;