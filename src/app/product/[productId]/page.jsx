'use client'

import { useRouter } from 'next/navigation'
import CardMedia from '@mui/material/CardMedia';
import { useEffect, useState } from 'react';
import { useCart } from '@mrvautin/react-shoppingcart';
import formatPrice from '@/utils/formatPrice';
import getProductById from '@/services/ordering/getProductById';
import Loading from '@/components/Loading';
import getDataLocalStorage from '@/utils/getDateLocalStorage';

export default function Product({ params }) {
  const [selectedFlavors, setSelectedFlavors] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [totalFlavors, setTotalFlavors] = useState(0);
  const [product, setProduct] = useState(0);
  const [error, setError] = useState(null);

  const { addItem } = useCart();
  const router = useRouter();

  const productId = params.productId;

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await getProductById(productId);
      
      if (data.flavors.length == 1) {
        const flavors = data.flavors;
        
          const items = Object.keys(flavors[0]);
          if (!items.length) {
              data.flavors.pop();
          }
      }

      setProduct(data);
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const data = getDataLocalStorage('userId');

    if (!data) {
      setError({ statusCode: 404 });
      return;
    }
  }, []);

  if (error) {
    const { statusCode, message } = error;
    const err = new Error(message)
    err.statusCode = statusCode
    throw err;
  }

  if (!product) {
    return <Loading />
  }


  const handleFlavorChange = (_id, value) => {
    const quantity = parseInt(value);
    const currentQuantity = selectedFlavors[_id] || 0;
    const newTotalFlavors = totalFlavors - currentQuantity + quantity;

    if (newTotalFlavors <= product.max_items) {
      setSelectedFlavors((prevFlavors) => ({
        ...prevFlavors,
        [_id]: quantity,
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
    const flavors = Object.keys(selectedFlavors).map(id => {
      const flavor = product.flavors.find(f => f._id == id);
      return {
        id: id,
        name: flavor.name,
        quantity: selectedFlavors[id] * quantity
      };
    });

    const price = !flavors.length ? product.price : (product.price / product.max_items);

    const item = {
      id: productId,
      name: product.name,
      price: price,
      image: product.image,
    }

    if (flavors.length) {
      item.itemVariants = flavors
    }

    const totalQuantity = totalFlavors ? totalFlavors * quantity : quantity;

    addItem(item, totalQuantity);

    router.push('/cart');
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
      <p className="mb-8 text-lg font-extraligth">{formatPrice(product.price)}</p>
      <h2 className="text-xl font-semibold mb-5">Escolha a quantidade</h2>
      <div>
        {product.flavors && product.flavors.length > 0 ? (
          product.flavors.map((flavor) => (
            <div key={flavor._id} className="flex flex-row justify-between mb-6">
              <span>
                <h3 className="text-lg font-medium">{flavor.name}</h3>
                <p className="mb-2 font-thin text-xs">{flavor.description}</p>
              </span>
              <span>
                <input
                  type="number"
                  min="0"
                  max={product.max_items}
                  value={selectedFlavors[flavor._id] || 0}
                  onChange={(e) => handleFlavorChange(flavor._id, e.target.value)}
                  className="w-16 p-1 border border-gray-300 rounded"
                />
              </span>
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
          className={`flex-1 text-center py-2 px-4 rounded ${(totalFlavors === 0 || totalFlavors < product.max_items) && product?.flavors?.length > 0
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-slate-50'
            }`}
          disabled={(totalFlavors === 0 || totalFlavors < product.max_items) && product?.flavors?.length > 0}
        >
          Adicionar
          <span className="ml-2">{formatPrice(product.price * quantity)}</span>
        </button>
      </div>
    </div>
  );
}
