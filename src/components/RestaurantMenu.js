import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex ] = useState(null);


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
            <div className="text-center font-bold my-5 "> 
                {resInfo[0]?.card?.card?.text} 
            <img src= {CDN_URL+ resInfo[2]?.card?.card?.info?.cloudinaryImageId} 
                className="m-5 object-cover h-45 w-[200px]"></img>
            <h2 className="mx-5 my-2 font-semibold">Menu</h2>
            <p className="mx-5 font-bold">
                {resInfo[2]?.card?.card?.info?.cuisines.join(", ")}
            </p>
            {/**categories accordian */}
            { 
                categories.map(
                    (category, index) => (
                    <RestaurantCatagory 
                        key={category?.card?.card.title}
                        data={category?.card?.card} 
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index)}
                    />)
                )
            }
            </div>
        </div>
    );
};

export default RestaurantMenu;