import CardProduct from "../_components/cardProduct";
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


export default async function Ordering({ params }) {

    const orderId = params.orderId;
    // const data = await getOrderData(orderId);

    const products = [
        {
            image: 'https://via.placeholder.com/140',
            title: 'Product 1',
            description: 'Description for product 1',
            price: 100,
            _id: '123'
        },
        {
            image: 'https://via.placeholder.com/140',
            title: 'Product 2',
            description: 'Description for product 2',
            price: 200,
            _id: '1234'
        },
        // Adicione mais produtos conforme necessário
    ];


    return (
        <Box className="flex flex-col min-h-screen">
            <Box className="fixed top-0 w-full bg-white z-50">
                <OrderCode
                    orderCode={'2020'}
                    orderId={params.orderId}
                />
            </Box>

            <Box className="flex flex-col gap-5 mt-20 mb-28 mx-5">
                {products.map((product, index) => (
                    <CardProduct
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        id={product._id}
                    />
                ))}
            </Box>

            <Box className="fixed bottom-0 w-full bg-black z-50 mt-10">
                <TotalPrice totalPrice={'20,00'} />
            </Box>
        </Box>
    )
}
