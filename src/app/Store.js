import { configureStore } from "@reduxjs/toolkit";
import  ProductReducer from "./Porduct";
import CardReducer from "./CardReducer";

const Store=configureStore({
    reducer:{
        product:ProductReducer,
        Card:CardReducer
    }
})
export default Store