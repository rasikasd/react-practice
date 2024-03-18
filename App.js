import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTMLElementRender
const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am h1 from div 2"),
    React.createElement("h2", {}, "I am h2 from div 2")])]);  //[] to create multiple elements inside an element


    //JSX- is not HTML inside JS -(transpiled before it reaches JS by Parcel through Babel)

    //JSX => converts to React.createElement() => React Element -JS Object => HTMLelement(render)
    //React Element
const jsxHeading = (<h1 className="headf" tabIndex="5">Namaste React in JSX</h1>);

console.log(jsxHeading);
//root.render(jsxHeading);


const elem = <h3>new element</h3>

//Functional component
const HeadingComponent = () => {
   return <h1 className="head">Namaste React with react functional component</h1>
}

const sum = 100+200;

const HeadingComponent2 = () => (
<div id="container">
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
    <h2> {console.log("any Javascript code can be written here ")} </h2>
    {elem}
    {sum}
    <h1 className="heading">Namaste React with react functional component2</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
