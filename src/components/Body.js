import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // same as : arr = useState(resList);
    // listOfRestaurants = arr[0];
    // setlistOfRestaurants = arr[1];

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
return  listOfRestaurants.length === 0 ? (
     <Shimmer />
   ): (
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
                listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
            }
            </div>
        </div>
    )
};

export default Body;