import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo);

    if(resInfo === null) return <Shimmer />;

    const { itemCards } = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    const categories = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        c => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

   console.log(categories);

    return (
        <div className="border-lime-800">
            <div className="text-xl m-5 "> {resInfo[0]?.card?.card?.text} </div>
            <img src= {CDN_URL+ resInfo[2]?.card?.card?.info?.cloudinaryImageId} 
            className="m-5 object-cover h-64 w-[200px]"></img>
            <h2 className="mx-5 my-2 font-semibold">Menu</h2>
            <div className="mx-5 font-bold">
                {resInfo[2]?.card?.card?.info?.cuisines.join(", ")}
            </div>
            <div className="m-5 text-lg font-semibold text-gray-800 dark:text-gray-50">
                {resInfo[2]?.card?.card?.info?.city}<br/>
                {resInfo[2]?.card?.card?.info?.costForTwoMessage}
                {console.log(resInfo[4])}
            </div>
        </div>
    );
};

export default RestaurantMenu;