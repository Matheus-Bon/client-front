'use client'

import React from 'react';

export default function OrderCompletion({ params }) {
    const handleWhatsAppRedirect = () => {
        const whatsappNumber = '5521967505770';
        const message = `Olá, meu pedido foi finalizado com o código ${params.order}.`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = whatsappURL;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Pedido Finalizado com Sucesso!</h2>
                <p className="text-gray-700 mb-6">Seu número de pedido é:</p>
                <p className="text-3xl font-bold text-gray-800 mb-8">{params.order}</p>
                <p className="text-gray-600 mb-6">O status do seu pedido será atualizado no WhatsApp.</p>
                <button
                    onClick={handleWhatsAppRedirect}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Voltar para o WhatsApp
                </button>
            </div>
        </div>
    );
}
