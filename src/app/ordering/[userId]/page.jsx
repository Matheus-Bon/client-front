import CardProduct from "../_components/ProductCard";
import OrderCode from "../_components/OrderCode";

const getOrderData = async (orderId) => {
    const res = await fetch('https://api.example.com/...');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = res.json();
    const statusOrder = data.status;

    if (statusOrder !== 'pending') {
        throw new Error('This order has already been processed');
    }

    return data;
}

export default function Ordering({ params }) {

    const orderId = params.userId;

    const products = [
        {
            category: 'Salgados',
            items: [
                {
                    image: 'https://via.placeholder.com/140',
                    title: 'Product 1',
                    description: 'Description for product 1',
                    price: 100,
                    _id: '1234'
                },
                {
                    image: 'https://via.placeholder.com/140',
                    title: 'Product 2',
                    description: 'Description for product 1',
                    price: 200,
                    _id: '12345'
                },
                {
                    image: 'https://via.placeholder.com/140',
                    title: 'Product 2',
                    description: 'Description for product 1',
                    price: 200,
                    _id: '123456'
                }
            ]
        },
        {
            category: 'Bebidas',
            items: [
                {
                    image: 'https://via.placeholder.com/140',
                    title: 'Product 2',
                    description: 'Description for product 1',
                    price: 200,
                    _id: '1237'
                },
                {
                    image: 'https://via.placeholder.com/140',
                    title: 'Product 2',
                    description: 'Description for product 1',
                    price: 200,
                    _id: '1230'
                }
            ]
        },
    ];


    return (
        <main>
            <ul className="flex flex-col gap-5 my-5 mx-5">
                {products.map((productCategory, index) => (
                    <li key={index}>
                        <h3 className="mb-2 font-bold text-2xl">{productCategory.category}</h3>
                        <ul className="flex flex-col gap-3">
                            {productCategory.items.map((product, productIndex) => (
                                <li>
                                    <CardProduct
                                        key={productIndex}
                                        image={product.image}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                        id={product._id}
                                    />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </main>
    )
}
