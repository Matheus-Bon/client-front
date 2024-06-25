'use client'

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from '@mrvautin/react-shoppingcart';
import Link from 'next/link';


export default function ProductCard({ image, title, description, price, id }) {
    const { addItem } = useCart()
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const product = {
            id,
            title,
            description,
            image,
            price
        };
        addItem(product, quantity);
    };

    return (
        <Link
            className="flex items-center border border-gray-300 rounded-lg p-4 max-w-md"
            href={`/ordering/product/${id}`}
        >
            <div className="w-24 h-24 flex-shrink-0">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="ml-4 flex-1">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-800 font-semibold">R$ {price}</p>
            </div>
        </Link>
    );
}
