import { useState } from "react";
import ItemList from "./ItemsList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
    

  const HandleClick = () => {
   setShowIndex();
  }
  return (
    <div>
      {/* Header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={HandleClick}>
        <span className="font-semibold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
        </div>
        { showItems && <ItemList items = {data.itemCards}/>}
      </div>
      
 

      {/* Accordian body */}
      
    </div>
  );
};

export default RestaurantCategories;
