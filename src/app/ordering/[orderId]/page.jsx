import OrderCode from "../_components/orderCode";
import TotalPrice from "../_components/totalPrice";
import Box from '@mui/material/Box';


const getOrderData = async (orderId) => {
    const res = await fetch('https://api.example.com/...');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = res.json();
    const statusOrder = data.status;

    if (statusOrder !== 'pending') {
        throw new Error('This order has already been processed');
    }

    return data;
}


export default async function OrderingDetails({ params }) {

    const orderId = params.orderId;
    // const data = await getOrderData(orderId);


    return (
        <Box className="flex flex-col min-h-screen">
            <Box className="fixed top-0 w-full bg-white z-50">
                <OrderCode orderCode={'2020'} />
            </Box>

            <Box className="flex-1 my-20">
                <p>Order Id: {params.orderId}</p>
            </Box>

            <Box className="fixed bottom-0 w-full bg-black z-50">
                <TotalPrice totalPrice={'20,00'} />
            </Box>
        </Box>
    )
}
