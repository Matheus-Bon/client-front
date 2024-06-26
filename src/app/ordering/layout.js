import "@/app/globals.css";
import OrderCode from "./_components/OrderCode";
import OrderingProvider from "./OrderingProvider";

export default function OrderingLayout({ children }) {
    return (
        <div className='bg-slate-50 flex flex-col justify-items-center m-3 min-h-screen'>
            <OrderCode orderCode={''} />
            <OrderingProvider>
                {children}
            </OrderingProvider>
        </div>
    );
}
