import "@/app/globals.css";
import OrderCode from "./_components/OrderCode";
import OrderingProvider from "./OrderingProvider";

export default function OrderingLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className='bg-slate-50'>
                <div className="flex flex-col justify-center min-h-screen">
                    <OrderCode orderCode={''} />
                    <OrderingProvider>
                        {children}
                    </OrderingProvider>
                </div>
            </body>
        </html>
    );
}
