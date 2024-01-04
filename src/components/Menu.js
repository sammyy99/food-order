import Shimmer from "../util/Shimmer";
import { useParams } from "react-router-dom";
import useMenuDataFetch from "../util/useMenuDataFetch";

const Menu = ()=>{

    const {resId} = useParams() 
    const resInfo = useMenuDataFetch(resId)

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