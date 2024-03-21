import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    // same as : arr = useState(resList);
    // listOfRestaurants = arr[0];
    // setlistOfRestaurants = arr[1];

    return (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => (res.avgRating > 4)
                    );
                    console.log(testlist);
                    setTestlist([1,2]);
                    setListOfRestaurant(filteredList);
                }}> Top rated restaurants</button>
            </div>
            <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant} />))
            }
            </div>
        </div>
    )
};

export default Body;