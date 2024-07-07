import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";



const AppLayout=()=>{
    return (
        <>
        <Provider store={appStore}>
        <Body/>
        </Provider>
        </>

    );
};

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)