import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Rendered");

    const onlineStatus = useOnlineStatus();

    return (
        <div className ="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56"
                src = {LOGO_URL} />
            </div>
            <div className="flex items-center justify-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online status : {onlineStatus ? "✅" : "🔴"} </li>
                    <li className="px-4"><Link to="/"> Home </Link></li>
                    <li className="px-4"><Link to="/about"> About us </Link> </li>
                    <li className="px-4"><Link to="/contact"> Contact us </Link></li>
                    <li className="px-4"> <Link to="/grocery"> Grocery </Link> </li>
                    <li className="px-4">Cart</li>
                    <li><button className="border border-solid border-blue-500 px-3 bg-blue-400 rounded-lg"
                    onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}> {btnNameReact}
                    </button> </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;