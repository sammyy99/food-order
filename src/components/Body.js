// mock data
import restList from "../mockdata/restList";
import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "../util/Shimmer";

const Body = () => {
  const [restCardList, setRestCardList] = useState([]);
  const [filteredRestCardList, setFilteredCardList] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Search render", searchText);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.943869&lng=77.725155&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestCardList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredCardList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Click event for best cards
  const handleButtonClick = () => {
    const filteredList = restCardList.filter(function (bestcard) {
      return bestcard.info.avgRating > 4.2;
    });
    setRestCardList(filteredList);
  };

  // Onchange event for search
  const searching = (e) => {
    setSearchText(e.target.value);
  };

  return restCardList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filterbtn">
        <button onClick={handleButtonClick}>Our best Restaurants</button>

        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={searching}
        />
        <button
          onClick={() => {
            const filteredList = restCardList.filter((elem) =>
              elem.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredCardList(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="cards">
        {filteredRestCardList.map(function (restaurantcard) {
          return (
            <Card key={restaurantcard?.info?.id} resdata={restaurantcard} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
