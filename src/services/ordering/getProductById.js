import api from "../api";

const getProductById = async (id) => {
    const route = `/products/${id}`;
    const options = {
        next: {
            // revalidate: 5 * 60,
            tags: ['products', 'one_product']
        }
    }

    return await api(route, options);
}

export default getProductById;