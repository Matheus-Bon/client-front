export default function CartItem({ image, title, description, price, id, quantity }) {
    return (
        <div className="flex items-center border p-4 rounded-lg w-80">
            <img src={image} alt="Produto" className="w-16 h-16 mr-4" />
            <div className="flex flex-col">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm">{description}</p>
                <p className="text-lg font-bold mt-2">R$ {price}</p>
                <div className="flex items-center mt-2">
                    <button
                        className="text-red-500 border border-red-500 rounded px-2 py-1"
                    >
                        -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                        className="text-green-500 border border-green-500 rounded px-2 py-1"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
