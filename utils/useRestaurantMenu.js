import { useEffect, useState } from "react";
import { Menu_Api } from "./Constants";

const useRestaurantMenu = (resId) => {

const [resInfo,setresInfo] = useState(null)

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async() => {
        const data = await fetch(Menu_Api+resId);
        const json = await data.json();
        setresInfo(json.data)
    };



    return resInfo;
}




export default useRestaurantMenu;