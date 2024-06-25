'use client'

import CardProduct from "../_components/ProductCard";
import OrderCode from "../_components/OrderCode";
import TotalPrice from "../_components/totalPrice";
import Box from '@mui/material/Box';
import setDataLocalStorage from "@/utils/setDataLocalStorage";


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

    const orderId = params.orderId;
    // const data = await getOrderData(orderId);

    //setDataLocalStorage('orderId', params.orderId);

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
        <>
            <div className="fixed top-0 w-full bg-white z-50">
                <OrderCode
                    orderCode={'2020'}
                    orderId={params.orderId}
                />
            </div>

            <div className="flex flex-col gap-5 mt-20 mb-28 mx-5">
                {products.map((productCategory, index) => (
                    <div key={index}>
                        <h3 className="mb-2 font-bold">{productCategory.category}</h3>
                        <div className="flex flex-col gap-3">
                            {productCategory.items.map((product, productIndex) => (
                                <CardProduct
                                    key={productIndex}
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    id={product._id}
                                    orderCode={'2020'}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
