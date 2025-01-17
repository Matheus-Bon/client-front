'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import getUserById from "@/services/ordering/getUserById";
import getProducts from "@/services/ordering/getProducts";
import Loading from "@/components/Loading";
import setDataLocalStorage from "@/utils/setDataLocalStorage";
import ProductCard from "@/components/ProductCard";


export default function Ordering({ params }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState('');
    const [orderCode, setOrderCode] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const { status, statusCode, data, message } = await getUserById(params.userId);

            if (status === 'error') {
                setError({ statusCode, message });
                return;
            }

            const orderCode = data.orderCode;
            if (orderCode) {
                setOrderCode(orderCode);
                return;
            }

            const userId = data._id;
            setUserId(userId);
        };

        fetchUser();
    }, []);

    useEffect(() => {
        if (orderCode) {
            router.push(`/orderCompletion/${orderCode}`);
        }
    }, [orderCode, router]);

    if (error) {
        const { statusCode, message } = error;
        const err = new Error(message);
        err.statusCode = statusCode;
        throw err;
    }

    useEffect(() => {
        setDataLocalStorage('userId', userId);
    }, [userId]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await getProducts();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    if (!products.length && !userId) {
        return (<Loading />);
    }

    return (
        <main>
            <ul className="flex flex-col gap-5 my-5 mx-5">
                {products.map((productCategory, index) => (
                    <li key={index}>
                        <h3 className="mb-2 font-bold text-2xl">{productCategory.category}</h3>
                        <ul className="flex flex-col gap-3">
                            {productCategory.items.map((product) => (
                                <li key={product._id}>
                                    <ProductCard
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
    );
}
