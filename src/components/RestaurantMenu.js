import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);  // useEffect hooks takes 2 args - 1st is a call back function and second is 
    //optional arg dependency array
    // if the optional arg is not given useEffect will be called everytime component renders - not to do
    // empty array means it will be called only the first time component renders

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=211120&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    };

    if(resInfo === null) return <Shimmer />;

    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Burger</li>

            </ul>
        </div>
    );
};

export default RestaurantMenu;