import { useEffect, useState } from "react";
import Shimmer from "../util/Shimmer";
import { Menu_API } from "../util/cdn";
import { useParams } from "react-router-dom";

const Menu = ()=>{

    const {resId} = useParams() 

    const [resInfo,setResInfo] = useState(null)
    useEffect(()=>{fetchMenu()},[])

const fetchMenu = async ()=>{
    const result = await fetch (Menu_API+resId)
    const json = await result.json()
    console.log(json)
    setResInfo(json.data)
}
if (resInfo == null) {return <Shimmer/>}

const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div>
         <h1>{name}</h1>
         <h4>{cuisines.join(", ")}</h4>
         <h3>{avgRating}</h3>
         <h3>{costForTwoMessage}</h3>
         <h2>Dishes</h2>
         <ul>
            {itemCards.map((item)=>{
                return <li key={item.card.info.id}>{item.card.info.name}</li>
            })} 
         </ul>
        </div>
    )
}

export default Menu;