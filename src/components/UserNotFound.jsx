'use client'

import React from 'react';

export default function UserNotFound({ message }) {
    const handleWhatsAppRedirect = () => {
        const whatsappNumber = '5521967505770';
        const message = 'Olá, quero fazer um pedido';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappURL;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col bg-white shadow-md rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Usuário Não Encontrado</h2>
                <p className="text-gray-700 mb-6">Você já fez seu pedido pelo nosso Whatsapp?</p>
                <button
                    onClick={handleWhatsAppRedirect}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Iniciar Pedido
                </button>
                <span className='font-thin text-xs mt-10'>{message}</span>
            </div>
        </div>
    );
}
