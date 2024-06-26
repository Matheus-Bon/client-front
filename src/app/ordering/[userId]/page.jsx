'use client'

import CardProduct from "../_components/ProductCard";
import OrderCode from "../_components/OrderCode";
import { useEffect, useState } from "react";

const getOrderData = async (orderId) => {
    const res = await fetch('https://api.example.com/...');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const statusOrder = data.status;

    if (statusOrder !== 'pending') {
        throw new Error('This order has already been processed');
    }

    return data;
}

export default function Ordering({ params }) {
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const data = localStorage.setItem('userId', params.userId);
        setUserId(data)
    }, []);


    const products = [
        {
            category: 'Salgados',
            items: [
                {
                    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sabornamesa.com.br%2Fmedia%2Fk2%2Fitems%2Fcache%2F98401d211546397e2b8c04cfd4ec5a4d_XL.jpg&f=1&nofb=1&ipt=563f2c2b20792060f5f57195d8ef063ec1539f275b3d1b0b4058a7783da7dc9d&ipo=images',
                    name: '100 Salgados',
                    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi officia consequatur distinctio, numquam itaque ab blanditiis sed. Consequuntur ducimus sint tenetur commodi cum aliquid, earum soluta delectus iste eum numquam!",
                    price: 50,
                    _id: 'salgado-1'
                },
                {
                    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sabornamesa.com.br%2Fmedia%2Fk2%2Fitems%2Fcache%2F98401d211546397e2b8c04cfd4ec5a4d_XL.jpg&f=1&nofb=1&ipt=563f2c2b20792060f5f57195d8ef063ec1539f275b3d1b0b4058a7783da7dc9d&ipo=images',
                    name: '50 Salgados',
                    description: 'legal d++',
                    price: 27.50,
                    _id: 'slagado-2'
                }
            ]
        },
        {
            category: 'Bebidas',
            items: [
                {
                    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus.coca-cola.com%2Fcontent%2Fdam%2Fnagbrands%2Fus%2Fcoke%2Fen%2Fvalue-collection%2Fcoca-cola-1.25-liter-new.png&f=1&nofb=1&ipt=666df483521aa78233b0b75ab3badf75c466c0789ae5aabff374b2024978a56c&ipo=images',
                    name: 'Coca Cola 2L',
                    description: 'Coca Cola 2l Gelada',
                    price: 12,
                    _id: 'coca'
                },
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
                            {productCategory.items.map((product) => (
                                <li key={product._id}>
                                    <CardProduct
                                        image={product.image}
                                        name={product.name}
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
