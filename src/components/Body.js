import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // same as : arr = useState(resList);
    // listOfRestaurants = arr[0];
    // setlistOfRestaurants = arr[1];

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are offline</h1>
    
return  listOfRestaurants.length === 0 ? (
     <Shimmer />
   ): (
        <div className="body">
            <div className="filter"> 
                <button className="m-4 p-4 border border-solid bg-slate-300 rounded-md" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => (res.avgRating > 4)
                    );
                    setListOfRestaurant(filteredList);
                }}> Top rated restaurants</button>
            </div>
            <div className="flex flex-wrap">
            {
                listOfRestaurants.map((restaurant) => (
                <RestaurantCardPromoted key={restaurant.info.id} resData={restaurant} />))
            }
            </div>
        </div>
    )
};

export default Body;