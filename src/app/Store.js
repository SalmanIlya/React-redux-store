import { configureStore } from "@reduxjs/toolkit";
import  ProductReducer from "./Porduct";

const Store=configureStore({
    reducer:{
        product:ProductReducer
    }
})
export default Store