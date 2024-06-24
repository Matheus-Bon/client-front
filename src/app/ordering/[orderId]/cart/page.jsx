'use client'

import Box from '@mui/material/Box';
import OrderCode from '@/app/ordering/_components/orderCode'
import CartItem from '../../_components/cartItem';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import CartContext from '../../../../_provider/CartProvider';


export default function Cart() {

    const { addItemToCart, cart } = useContext(CartContext);

    // const increaseQty = (cartItem)

    return (
        <Box className="flex flex-col min-h-screen">
            <Box className="fixed top-0 w-full bg-white z-50">
                <OrderCode orderCode={'2020'} />
            </Box>
            <Box className="flex flex-col gap-5 mt-20 mb-28 mx-5">
                <div>
                    <h2 className='text-lg'>
                        Sua cesta
                    </h2>
                </div>

                {cart?.cartItems?.length > 0 && (
                    <div className='flex flex-col'>
                        {cart?.cartItems?.map((cartItem, i) => {
                            <CartItem
                                key={i}
                                image={cartItem.image}
                                title={cartItem.title}
                                description={cartItem.description}
                                price={cartItem.price}
                                id={cartItem.id}
                            />
                        })}
                    </div>
                )}
            </Box>
            <Box className="flex flex-row justify-between fixed bottom-0 w-full z-50 mt-10 bg-slate-100">
                <div className='my-2 ml-3'>
                    <p className='text-sm font-extralight text-gray-900 mb-1'>Total com a entrega</p>
                    <span className='font-semibold'>
                        R$ 52,60
                    </span>
                </div>
                <div className='m-5'>
                    <Button variant="contained">Continuar</Button>
                </div>
            </Box>
        </Box>
    )
}
