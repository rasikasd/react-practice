import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);  // useEffect hooks takes 2 args - 1st is a call back function and second is 
    //optional arg dependency array
    // if the optional arg is not given useEffect will be called everytime component renders - not to do
    // empty array means it will be called only the first time component renders

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=765152&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data.cards);
        console.log(json.data.cards);
    };

    if(resInfo === null) return <Shimmer />;

    return (
        <div className="border-lime-800">
            <div className=" text-xl"> {resInfo[0].card.card.text} </div>
            <img src= {CDN_URL+ resInfo[2].card.card.info.cloudinaryImageId} 
            className="m-4 p-4 w-[150px]"></img>
            <h2>Menu</h2>
            <div>
                {resInfo[2].card.card.info.cuisines}
            </div>
        </div>
    );
};

export default RestaurantMenu;