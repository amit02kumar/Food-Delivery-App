import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import CartContext from "../utils/CartContext";

const ItemList = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2 font-bold text-gray-700">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-32 h-24 object-cover rounded-lg"
              alt={item.card.info.name}
            />
            <button
              className="mt-2 bg-white border border-gray-300 text-green-600 font-semibold text-sm rounded px-3 py-1 shadow hover:bg-green-50"
              onClick={() =>
                addToCart({
                  id: item.card.info.id,
                  name: item.card.info.name,
                  price:
                    item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100,
                  imageId: item.card.info.imageId,
                })
              }
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;




