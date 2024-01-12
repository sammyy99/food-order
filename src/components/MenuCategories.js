import { useState } from "react";
import CategoryItems from "./CategoryItems";

const MenuCategories = ({ data }) => {
  //console.log(data);

  const [itemView,setItemView] = useState(false)

  const clickHandler = ()=>{
    setItemView(!itemView);
  }
  
  return (

    <div className="w-6/12 m-auto">
      <div className="  border-b-1 border-opacity-80 mb-6 bg-slate-50 shadow-md">
        <div className="flex justify-between font-semibold text-xl p-3 my-5 cursor-pointer" onClick={clickHandler}>
          <span className="">
            {data?.card?.card?.title} ({data.card.card.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        <div>
            {itemView ? <CategoryItems items={data}/>:null}
        </div>
        
      </div>
    </div>

  );
};

export default MenuCategories;
