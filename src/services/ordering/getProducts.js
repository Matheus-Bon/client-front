import api from "../api";

const getProducts = async () => {
    const route = '/products';
    const options = {
        next: {
            // revalidate: 5 * 60,
            tags: ['products']
        }
    }

    return await api(route, options);
}

export default getProducts;