'use client'

import { CartProvider } from '@mrvautin/react-shoppingcart';

export default function OrderingProvider({ children }) {
    return (
        <CartProvider
            locale={'pt-BR'}
            currency={'BRL'}
        >
            {children}
        </CartProvider>
    )
}