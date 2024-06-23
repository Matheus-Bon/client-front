'use client'

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const router = useRouter();

    useEffect(() => {
        setCartToState();
    }, []);

    const setCartToState = () => {
        setCart(
            localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []
        );
    };

    const addItemToCart = async ({ id, quantity = 1 }) => {
        const item = {
            id,
            quantity
        };

        const isItemExist = cart?.cartItems?.find((i) => i.id === item.id);
        let newCartItems;

        if (isItemExist) {
            newCartItems = cart?.cartItems.map((i) => i.id === isItemExist.id ? item : i);
        } else {
            newCartItems = [...(cart?.cartItems || []), item];
        }

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));

        setCartToState();
    };

    const deleteItemFromCart = (id) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                deleteItemFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
