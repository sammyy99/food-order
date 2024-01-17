// mock data
//import restList from "../mockdata/restList";
import Card ,{PromotionCard} from "./Card";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../util/Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../util/UserContext";

const Body = () => {
  const [restCardList, setRestCardList] = useState([]);
  const [filteredRestCardList, setFilteredCardList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const {loggedInUser , setUserName} = useContext(UserContext)

  const PromotedCard = PromotionCard(Card);

  console.log("Search render", restCardList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6555386&lng=77.36761419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
    setFilteredCardList(filteredList);
  };

  // Onchange event for search
  const searching = (e) => {
    setSearchText(e.target.value);
  };

  // OnChange event for userName
  const userProfile = (e)=>{
    setUserName(e.target.value)
  }

  return restCardList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-10 px-20">
      <div className="flex justify-around my-5">
        <div className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          <button onClick={handleButtonClick}>Our best Restaurants</button>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            className="bg-white focus:outline-none border border-gray-300 rounded-full py-2 px-4 leading-tight shadow-md"
            value={searchText}
            onChange={searching}
          />
          <input
            type="text"
            className="bg-white focus:outline-none border border-gray-300 rounded-full py-2 px-4 leading-tight shadow-md"
            value={loggedInUser}
            onChange={userProfile}
          />
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
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
      </div>

      <div className="mt-16 cards flex flex-wrap justify-evenly">
        {filteredRestCardList.map(function (restaurantcard) {
          return (
            <Link
              key={restaurantcard?.info?.id}
              to={"/restaurant/" + restaurantcard?.info?.id}
              className=""
            >
              {restaurantcard.info.avgRating > 4.0 ? (<PromotedCard resdata={restaurantcard}/>) : (<Card resdata={restaurantcard} />)}
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
