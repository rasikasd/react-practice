import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";

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
            LIST_API
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
                        (res) => (res?.info.avgRating > 4.2)
                    );
                    setListOfRestaurant(filteredList);
                }}> Top rated restaurants</button>
            </div>
            <div className="flex flex-wrap">
            {
                listOfRestaurants.map((restaurant) => (
                <Link 
                    key={restaurant.info.id} 
                    to={"/restaurant/" + restaurant.info.id} >
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                </Link>))
            }
            </div>
        </div>
    )
};

export default Body;