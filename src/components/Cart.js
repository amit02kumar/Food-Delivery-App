import react, { useContext } from "react";
import CartContext from "../utils/CartContext";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10 pt-27">🛒 Your cart is empty</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow pt-27">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      <ul className="divide-y">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-3">
            {/* Image */}
            <img
              src={CDN_URL + item.imageId}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />

            {/* Info */}
            <div className="flex-1 px-4">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                ₹ {item.price} x {item.quantity}
              </p>
            </div>

            {/* Price */}
            <span className="font-semibold">₹ {item.price * item.quantity}</span>

            {/* Remove */}
            <button
              className="text-red-500 ml-4"
              onClick={() => removeFromCart(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h3 className="font-bold text-xl mt-4">Total: ₹ {total}</h3>

      <div className="flex gap-4 mt-6">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear Cart
        </button>
        <button
          onClick={() => alert("✅ Checkout successful!")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;


