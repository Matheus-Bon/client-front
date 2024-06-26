'use client'

import formatPrice from "@/utils/formatPrice";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "@mrvautin/react-shoppingcart";
import { useEffect, useState } from "react";
import Link from "next/link";
import getDataLocalStorage from "@/utils/getDateLocalStorage";


export default function Cart() {
    const { items: dataItems, cartTotal: cartTotalData } = useCart();
    const [items, setItems] = useState([]);
    const [cartTotal, setCartTotal] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        setCartTotal(cartTotalData);
    }, [cartTotalData]);

    useEffect(() => {
        setItems(dataItems);
    }, [dataItems]);

    useEffect(() => {
        const data = getDataLocalStorage('userId')
        setUserId(data);
    }, []);

    const { removeItem, removeShipping } = useCart();


    const handleRemoveItem = (id, name, price, quantity, itemVariants) => {
        const product = { id, name, price, quantity, itemVariants };
        removeItem(product);
        removeShipping();
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const total = cartTotal ? (cartTotal / 100) + 5 : 0;

    return (
        <main>
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
                                src={item.image ? item.image : null}
                                alt={item.image ? item.name : null}
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
                <Link
                    className="mt-4 text-slate-700 py-2 px-4 rounded"
                    href={`/ordering/${userId}`}
                >
                    Adicionar mais itens
                </Link>
            </div>

            <div className="flex flex-row justify-between items-center fixed inset-x-0 bottom-0 bg-slate-100 shadow-inner px-6 pt-2 pb-3 mt-5">
                <div>
                    <span>
                        <p className="font-thin text-xs">Total com a <strong>taxa de entrega</strong></p>
                    </span>
                    <span>
                        <p className="font-semibold text-xl">{formatPrice(total)}</p>
                    </span>
                </div>
                <div>
                    <button
                        className={`flex-1 text-center py-2 px-4 rounded ${!items.length
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-500 text-slate-50'
                            }`}
                        disabled={!items.length}
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </main>

    );
}
