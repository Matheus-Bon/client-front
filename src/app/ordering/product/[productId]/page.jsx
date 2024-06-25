'use client'

import CardMedia from '@mui/material/CardMedia';
import OrderCode from '@/app/ordering/_components/OrderCode'
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function Product({ params }) {
  const [selectedFlavors, setSelectedFlavors] = useState({});

  const productId = params.productId;

  // const product = {
  //   name: '100 Salgados',
  //   image: 'https://via.placeholder.com/140',
  //   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nisi, ratione inventore architecto sequi aliquam quas ipsa nemo? Laboriosam laborum cupiditate nisi, consequuntur accusamus voluptate sunt eius nemo libero in!",
  //   price: 50,
  //   max_items: 100,
  //   flavors: [
  //     { id: 1, name: 'Quibe', description: 'amo quibe' },
  //     { id: 2, name: 'Coxinha', description: '' },
  //   ]
  // }

  const product = {
    name: 'Coca Cola',
    image: 'https://via.placeholder.com/140',
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nisi, ratione inventore architecto sequi aliquam quas ipsa nemo? Laboriosam laborum cupiditate nisi, consequuntur accusamus voluptate sunt eius nemo libero in!",
    price: 12,
    max_items: 100,
    flavors: []
  }


  const handleFlavorChange = (id, quantity) => {
    setSelectedFlavors((prevFlavors) => ({
      ...prevFlavors,
      [id]: quantity,
    }));
  };

  return (
    <div className="p-8 font-sans">
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
        className='mb-5'
      />
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="mb-8 text-lg font-thin">R$ {product.price}</p>
      <h2 className="text-xl font-semibold mb-2">Escolha a quantidade</h2>
      <div>
        {product.flavors && product.flavors.length > 0 ? (
          product.flavors.map((flavor) => (
            <div key={flavor.id} className="mb-6">
              <h3 className="text-lg font-medium">{flavor.name}</h3>
              <p className="mb-2">{flavor.description}</p>
              <input
                type="number"
                min="0"
                max={product.max_items}
                value={selectedFlavors[flavor.id] || 0}
                onChange={(e) => handleFlavorChange(flavor.id, e.target.value)}
                className="w-16 p-1 border border-gray-300 rounded"
              />
            </div>
          ))
        ) : (
          <TextField
            id="outlined-number"
            label="Quantidade"
            type="number"
            min="0"
            max={product.max_items}
            value={selectedFlavors[0] || 0}
            onChange={(e) => handleFlavorChange(0, e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            className='w-32 mt-2'
          />
        )}
      </div>
      <button className="mt-4 px-6 py-2 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500">
        Adicionar
      </button>
    </div>
  );
}
