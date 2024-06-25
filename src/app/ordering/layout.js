'use client'

import "@/app/globals.css";
import { GlobalProvider } from "@/app/GlobalProvider";
import OrderCode from "./_components/OrderCode";
import getDataLocalStorage from "@/utils/getDateLocalStorage";

export default function OrderingLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className='bg-slate-50'>
                <div className="flex flex-col min-h-screen">
                    <OrderCode orderCode={''} />
                    <GlobalProvider>
                        {children}
                    </GlobalProvider>
                </div>
            </body>
        </html>
    );
}
