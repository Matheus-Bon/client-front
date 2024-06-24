'use client'

import { CartProvider } from '@mrvautin/react-shoppingcart';

export function GlobalProvider({ children }) {
    return (
        <CartProvider
            locale={'pt-BR'}
            currency={'BRL'}
        >
            {children}
        </CartProvider>
    )
}