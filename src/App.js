import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element : <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path: "/cart",
                element : <Cart />,
            },
            {
                path: "/grocery",
                element : <Suspense fallback={<h1>Loading...</h1>} > <Grocery /> </Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)