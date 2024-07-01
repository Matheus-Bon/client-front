'use client'

import React from 'react'

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Algo deu errado!</h2>
                <p className="text-gray-700 mb-6">Desculpe, ocorreu um erro inesperado. Por favor, tente novamente.</p>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Tentar novamente
                </button>
            </div>
        </div>
    )
}
