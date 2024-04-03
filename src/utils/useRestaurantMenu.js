import { useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    //fetchData

    useEffect(() => {
        fetchMenu();
    }, []);  // useEffect hooks takes 2 args - 1st is a call back function and second is 
    //optional arg dependency array
    // if the optional arg is not given useEffect will be called everytime component renders - not to do
    // empty array means it will be called only the first time component renders

    const fetchMenu = async() => {
        const data = await fetch(MENU_API+ resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    };

    return resInfo;
}

export default useRestaurantMenu;