import { restaurantList } from "../../utils/Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//   );
//   return filterData;
// }

//const Body = () => {
// const [AllRestaurants, setAllRestaurants] = useState([]);
// const [filterRestaurants, setFilterRestaurants] = useState([]);
// const [searchText, setSearchText] = useState(""); //<---  just like this const searchText = "KFC"

// useEffect(() => {
//   fetchData();
// }, []);

// async function fetchData() {
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );
//   const json = await data.json();
//   console.log(json, "inside function");
//   setAllRestaurants(
//     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
//   setFilterRestaurants(
//     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
// }

// console.log("render", filterRestaurants);

// // if (!AllRestaurants) return null;

// // if (filterRestaurants?.length === 0)
// //  return <h1>No Restaurants found</h1>;

// return AllRestaurants?.length === 0 ? (
//   <Shimmer />
// ) : (
//   <>
//     <div className="Search-Conatiner">
//       <input
//         type="text"
//         className="serach-input"
//         placeholder="SearchHere"
//         value={searchText}
//         onChange={(e) => {
//           setSearchText(e.target.value); // e.target.value is for whatever you want to right in input
//         }}
//       />
//       <button
//         className="search-button"
//         onClick={() => {
//           //Need to filter Data
//           const data = filterData(searchText, AllRestaurants);
//           //Update the state (restaurants)
//           setFilterRestaurants(data);
//         }}
//       >
//         Search
//       </button>
//     </div>

//     <div className="restaurant-list">
//       {filterRestaurants?.map((restaurant, idx) => {
//         return <RestaurantCard {...restaurant?.info} key={idx} />;
//       })}
//     </div>
//   </>
// );

//};

// const Body = () => {
//   const [listOfRestaurant, setlistOfRestaurant] = useState(restaurantList);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();
//     console.log(json);
//     setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
//   };

//   //conditional Rendering

//   return listOfRestaurant.length === 0 ? <Shimmer/> : (
//     <div className="Body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             const filteredList = listOfRestaurant.filter(
//               (res) => res.data.avgRating > 4
//             );
//             setlistOfRestaurant(filteredList);
//           }}
//         >
//           Top Rated Restaurant
//         </button>
//       </div>
//       <div className="res-conatiner">
//         {listOfRestaurant.map((restaurant) => (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

const Body = () => {
  // create state variable
  const [listOfRes, setListOfRes] = useState([]);

  // create a state variable only for the filtered res
  const [filteredRes, setFilteredRes] = useState([]);

  // decalring normal variable and modifying
  // let list = [];
  // list.push("abc")
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonFile = await data.json();
    console.log(jsonFile);
    // Optional chaining
    setListOfRes(
      jsonFile?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(setListOfRes);
    setFilteredRes(
      jsonFile?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline! please check your internet connection;
      </h1>
    );
  }

  // consitional rendering - when you render with a condition
  // when the page is emptry fter loading, insted of just keeping it blanck we can add fake cards
  // if (listOfRes.length === 0){
  //     return <Shimmer/>
  // }

  // You can use ternary operator to write the above code as below line
  return listOfRes.length === 0 ? 
    <Shimmer />
   : (
    <div className="body bg-red-800">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Serach Restaurant/Dishes"
            className="w-60 h-10 border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              const FilteredData = listOfRes.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                // make it not case sensitive
              );
              // setListOfRes(FilteredData);
              setFilteredRes(FilteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-800 mr-[450px] "
            onClick={() => {
              // (console.log("clicked"))

              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4
              );
              // console.log(filteredList)

              // update the variable with filteredList
              setFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {/*  this is the callbck fn which will be clled when we clcik the button*/}

      <div className="flex flex-wrap">
        {/* <RestroCard resName="Pizza"/> */}
        {/* <RestroCard resData={resList[1]}/>
             <RestroCard resData={resList[2]}/> */}

        {/* instead of repeating it like this we can use loop - map */}
        {filteredRes.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {/* inside restro-card, I have looped over my resList and for each restro I am returning some piece of jsx */}
        {/* whenever you use map, always give key over here. key will have an unique identification of each product */}
        {/* react says that never take index as the key, use id */}
        {/* Restaurnt card - we will be reusing it a lot so we will make a different component */}
      </div>
    </div>
  );
};

export default Body;
