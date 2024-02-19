//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../../utils/Constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(Menu_Api + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // }

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card || {};
  console.log(itemCards);

  const Categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(Categories);
  return (
    <div className="text-center">
      <div className="my-6">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>

        {/* categories Accordions */}

        {Categories.map((category, index) => (

          //controlled Component
          <RestaurantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
