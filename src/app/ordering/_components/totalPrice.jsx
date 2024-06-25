import * as React from 'react';


export default function TotalPrice({ totalPrice }) {
    return (
        <div className='bg-blue-400 p-5'>
            <p className='text-center text-lg'>
                Total R$ {totalPrice}
            </p>
        </div>
    );
}