// mock data 
import restList from "../mockdata/restList";
import Card from "./Card";
import { useState , useEffect } from "react";
import Shimmer from "../util/Shimmer";

const Body = () => {
  const [restCardList, setRestCardList] = useState(restList);

  useEffect(()=>{
    fetchData();
  },[])

 const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.943869&lng=77.725155&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json =  await data.json();
  
  setRestCardList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }
 

  const handleButtonClick = () => {
    const filteredList = restCardList.filter(function (bestcard) {
      return bestcard.info.avgRating > 4.2;
    });
    setRestCardList(filteredList);
  };
 

  return (
    <div className="body">
      <div className="filterbtn">
        <button onClick={handleButtonClick}>
          Our best Restaurants
        </button>
      </div>

      <div className="cards">
        {restCardList.map(function (restaurantcard) {
          return <Card key = {restaurantcard?.info?.id} resdata={restaurantcard} />;
        })}
      </div>
    </div>
  );
};

export default Body;