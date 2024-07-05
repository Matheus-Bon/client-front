'use client'

import React, { useEffect, useState } from 'react';
import formatPrice from '@/utils/formatPrice';
import DialogSelect from '../_components/DialogSelect';
import { useCart } from '@mrvautin/react-shoppingcart';
import getDataLocalStorage from '@/utils/getDateLocalStorage';
import sendOrder from '@/services/ordering/sendOrder';
import { useRouter } from 'next/navigation';
import clearLocalStorage from '@/utils/clearLocalStorage';


export default function Payment() {
    const { cartTotal: cartTotalData, totalShippingAmount: totalShippingAmount, items } = useCart();
    const [paymentMethod, setPaymentMethod] = useState({ value: 'PIX', label: 'Pix' });
    const [shipping, setShipping] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();


    useEffect(() => {
        setCartTotal(cartTotalData);
    }, []);

    useEffect(() => {
        setShipping(totalShippingAmount);
    }, []);

    useEffect(() => {
        const data = getDataLocalStorage('userId');

        if (!data) {
            setError({ statusCode: 404 });
            return;
        }

        setUserId(data);
    }, []);

    if (error) {
        const { statusCode, message } = error;
        const err = new Error(message)
        err.statusCode = statusCode
        throw err;
    }

    const handlePaymentMethodChange = (newPaymentMethod) => {
        setPaymentMethod(newPaymentMethod);
    };

    const paymentOptions = [
        { value: 'PIX', label: 'Pix' },
        { value: 'DEBIT', label: 'Débito' },
        { value: 'CREDIT', label: 'Crédito' },
        { value: 'CASH', label: 'Dinheiro' },
    ];

    const subTotal = cartTotal - shipping;

    const madeOrder = async () => {
        setLoading(true);
        setError('');
        const newOrder = {
            userId,
            payment: paymentMethod.value,
            products: items
        };

        try {
            const { data } = await sendOrder(newOrder);
            router.push(`/ordering/orderCompletion/${data}`)
        } catch (error) {
            console.error('Erro ao enviar pedido:', error);
            setError('Erro ao enviar pedido. Tente novamente.');
        } finally {
            clearLocalStorage();
            setLoading(false);
        }
    };


    return (
        <div className="mt-40 p-6 bg-white shadow-md rounded-lg mx-6">
            <h1 className="text-2xl font-bold mb-4">Pagamento</h1>
            <div className="flex justify-between items-center mb-4">
                <div className="text-lg">{paymentMethod.label}</div>
                <DialogSelect
                    textButton={'Trocar'}
                    dialogTitle={'Formas de Pagamento'}
                    optionSelected={paymentMethod}
                    options={paymentOptions}
                    onChange={handlePaymentMethodChange}
                />
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4">
                <h2 className="text-xl font-bold mb-4">Resumo de valores</h2>
                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <p>{formatPrice(subTotal)}</p>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Taxa de entrega</span>
                    <span className="text-green-500">{formatPrice(shipping)}</span>
                </div>
                <div className="flex justify-between mb-2 font-bold">
                    <span>Total</span>
                    <span>{formatPrice(cartTotal)}</span>
                </div>
            </div>

            <button
                onClick={madeOrder}
                className="w-full bg-blue-500 text-white py-2 mt-6 rounded-md font-bold"
                disabled={loading}
            >
                {loading ? 'Fazendo pedido...' : `Finalizar pedido • ${formatPrice(cartTotal)}`}
            </button>

        </div>
    );
}
