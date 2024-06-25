'use client'

import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import { useCart } from '@mrvautin/react-shoppingcart';

const product = {
  name: '100 Salgados',
  image: 'https://via.placeholder.com/140',
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nisi, ratione inventore architecto sequi aliquam quas ipsa nemo? Laboriosam laborum cupiditate nisi, consequuntur accusamus voluptate sunt eius nemo libero in!",
  price: 50,
  max_items: 100,
  flavors: [
    { id: 1, name: 'Quibe', description: 'amo quibe' },
    { id: 2, name: 'Coxinha', description: '' },
  ]
}

// const product = {
//   name: 'Coca Cola',
//   image: 'https://via.placeholder.com/140',
//   description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nisi, ratione inventore architecto sequi aliquam quas ipsa nemo? Laboriosam laborum cupiditate nisi, consequuntur accusamus voluptate sunt eius nemo libero in!",
//   price: 12,
//   max_items: 100,
//   flavors: []
// }

export default function Product({ params }) {
  const [selectedFlavors, setSelectedFlavors] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [totalFlavors, setTotalFlavors] = useState(0);

  const productId = params.productId;

  const { addItem } = useCart();

  const handleFlavorChange = (id, value) => {
    const quantity = parseInt(value);
    const currentQuantity = selectedFlavors[id] || 0;
    const newTotalFlavors = totalFlavors - currentQuantity + quantity;

    if (newTotalFlavors <= product.max_items) {
      setSelectedFlavors((prevFlavors) => ({
        ...prevFlavors,
        [id]: quantity,
      }));
      setTotalFlavors(newTotalFlavors);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const flavors = Object.keys(selectedFlavors).map(id => ({
      id: parseInt(id),
      quantity: selectedFlavors[id]
    }));

    addItem({
      id: productId,
      name: product.name,
      price: product.price * quantity,
      flavors: flavors,
    }, totalFlavors * quantity);
  };

  return (
    <div className="p-5 font-sans">
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
        className='mb-5'
      />
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="mb-8 text-lg font-thin">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
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
        ) : (<></>)}
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={decreaseQuantity}
          className="w-6 h-6 flex items-center justify-center text-gray-500 border border-gray-300 rounded"
        >
          <span className="text-lg leading-none">-</span>
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="w-6 h-6 flex items-center justify-center text-red-500 border border-red-500 rounded"
        >
          <span className="text-lg leading-none">+</span>
        </button>
        <button
          onClick={handleAddToCart}
          className={`flex-1 text-center py-2 px-4 rounded ${totalFlavors === 0 || totalFlavors < product.max_items
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-slate-50'
            }`}
          disabled={totalFlavors === 0 || totalFlavors < product.max_items}
        >
          Adicionar
          <span className="ml-2">{(product.price * quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </button>
      </div>
    </div>
  );
}
