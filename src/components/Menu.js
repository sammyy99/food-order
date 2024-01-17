import Shimmer from "../util/Shimmer";
import { useParams } from "react-router-dom";
import useMenuDataFetch from "../util/useMenuDataFetch";
import MenuCategories from "./MenuCategories";
import { useState } from "react";

const Menu = ()=>{

    const {resId} = useParams() 
    const resInfo = useMenuDataFetch(resId)

    const[showIndex , setShowIndex] = useState(null);

if (resInfo == null) {return <Shimmer/>}


const {name,cuisines} = resInfo?.cards[0]?.card?.card?.info

const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat)=>{
    return cat.card.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 })

console.log("Menu rerendered on expanding")

    return (
        <div className="text-center pt-8">
         <h1 className="font-bold text-3xl py-4">{name}</h1>
         <h4 className="font-bold text-xl">{cuisines.join(", ")}</h4>
         <div className="pt-10">
            {categories.map((category , index)=>{
              return  <MenuCategories key={category.card.card.title} data={category} itemView={index == showIndex ? true:false} setShowIndex = {()=>{setShowIndex(index)}}/>
            })}
         </div>
        </div>
    )
}

export default Menu;