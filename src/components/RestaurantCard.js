import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    costForTwo,
    aggregatedDiscountInfoV3,
    promoted,
  } = resData?.info;

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-2xl shadow border border-gray-100 bg-white cursor-pointer 
      hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-in-out relative"
    >
      {/* Image with badges */}
      <div className="relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-40 object-cover rounded-lg"
        />

        {/* Discount Badge */}
        {aggregatedDiscountInfoV3?.header && (
          <span className="absolute bottom-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded backdrop-brightness-50">
            {aggregatedDiscountInfoV3.header}{" "}
            {aggregatedDiscountInfoV3.subHeader || ""}
          </span>
        )}

        {/* Promoted Badge */}
        {promoted && (
          <span className="absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded backdrop-brightness-50">
            Promoted
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-gray-500 text-sm truncate">
          {cuisines.join(", ")}
        </p>

        {/* Rating + Time + Price */}
        <div className="flex items-center justify-between text-sm font-medium mt-2">
          <span
            className={`px-2 py-0.5 rounded text-white ${
              avgRating >= 4
                ? "bg-green-600"
                : avgRating >= 3
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600">{sla?.slaString}</span>
          <span className="text-gray-600">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
