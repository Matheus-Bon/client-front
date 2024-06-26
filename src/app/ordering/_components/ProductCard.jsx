import React, { useState } from 'react';
import { useCart } from '@mrvautin/react-shoppingcart';
import Link from 'next/link';
import formatPrice from '@/utils/formatPrice';
import truncateDescription from '@/utils/truncateDescription';


export default function ProductCard({ image, name, description, price, id }) {
    return (
        <Link
            className="flex items-center border border-gray-300 rounded-lg p-4 max-w-md"
            href={`/ordering/product/${id}`}
        >
            <div className="w-24 h-24 flex-shrink-0">
                <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="ml-4 flex-1">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm font-thin text-gray-600">{truncateDescription(description, 90)}</p>
                <p className="text-gray-800 font-semibold mt-2">{formatPrice(price)}</p>
            </div>
        </Link>
    );
}
