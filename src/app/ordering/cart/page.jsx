'use client'

import formatPrice from "@/utils/formatPrice";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "@mrvautin/react-shoppingcart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Cart() {
    const { items: dataItems } = useCart();
    const [items, setItems] = useState([]);

    const router = useRouter();

    useEffect(() => {
        setItems(dataItems);
    }, [dataItems]);

    const { removeItem } = useCart();


    const handleRemoveItem = (id, name, price, quantity, itemVariants) => {
        const product = { id, name, price, quantity, itemVariants };
        removeItem(product);
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };


    return (
        <section>
            <div className="mt-5">
                <h3 className="text-lg font-semibold">
                    Items Adicionados
                </h3>
            </div>

            <ul>
                {items && items.map((item) => (
                    <li key={item.id} className="p-4 mt-5 shadow-md rounded-lg">
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Salgados"
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 flex-1">
                                <h2 className="text-xl font-bold">{item.name}</h2>
                                <p className="text-lg">{formatPrice(item.price)}</p>
                                <p className="text-sm">{item.quantity} unidades</p>
                            </div>
                            <IconButton aria-label="delete" size="large">
                                <DeleteIcon
                                    fontSize="inherit"
                                    className="text-red-600"
                                    onClick={() => handleRemoveItem(item.id, item.name, item.price, item.quantity, item.itemVariants)}
                                />
                            </IconButton>
                        </div>

                        <ul className="flex flex-col mt-5">
                            {item.itemVariants.map((el) => (
                                <li key={el.id} className="font-thin text-sm text-gray-700">{el.name} - {el.quantity} unds.</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="flex flex-row justify-center">
                <button
                    className="mt-4 bg-blue-500 text-slate-50 py-2 px-4 rounded"
                    onClick={() => router.push('/ordering/15')}
                >
                    Adicionar mais itens
                </button>
            </div>
        </section>
    );
}
