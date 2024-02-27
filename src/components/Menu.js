import Shimmer from "../util/Shimmer";
import { useParams } from "react-router-dom";
import useMenuDataFetch from "../util/useMenuDataFetch";
import MenuCategories from "./MenuCategories";
import { useState } from "react";

const Menu = () => {
    const { resId } = useParams();
    const resInfo = useMenuDataFetch(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo == null) {
        return <Shimmer />;
    }

    let name, cuisines, categories;

    try {
        name = resInfo?.cards[2]?.card?.card?.info?.name;
        cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
        categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cat =>
            cat.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    } catch (error) {
        return (
            <div className="text-center pt-8">
                <h1>Error: {error.message}</h1>
            </div>
        );
    }

    return (
        <div className="text-center pt-8">
            <h1 className="font-bold text-3xl py-4">{name}</h1>
            <h4 className="font-bold text-xl">{cuisines.join(", ")}</h4>
            <div className="pt-10">
                {categories.map((category, index) => (
                    <MenuCategories
                        key={category.card.card.title}
                        data={category}
                        itemView={index === showIndex}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
