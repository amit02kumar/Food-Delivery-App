import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.918938&lng=75.7887458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection.</h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ml-15 ">
      <div className="filter flex flex-wrap items-center pt-24">
        {/* Search */}
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black p-1 rounded"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-blue-300 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="m-4 p-4 flex items-center space-x-4">
          <button
            className="filter-btn px-4 py-2 bg-blue-300 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>

          <button
            className="filter-btn px-4 py-2 bg-blue-300 rounded-lg cursor-pointer"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants); // reset list
              setSearchText(""); // reset search box
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Restaurant cards or Empty State */}
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.length === 0 ? (
          <h2 className="text-center w-full text-xl font-semibold text-gray-600 my-10">
            🚫 No restaurants found
          </h2>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
