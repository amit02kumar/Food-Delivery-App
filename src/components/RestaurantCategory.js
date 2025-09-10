import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // toggle handled in parent
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-gray-600">
          {showItems ? "▲" : "▼"}
        </span>
      </div>

      {/* Item list */}
      {showItems && (
        <div className="p-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
