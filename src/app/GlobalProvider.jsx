import { CartProvider } from "./ordering/_context/cartContext";

export function GlobalProvider({ children }) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}