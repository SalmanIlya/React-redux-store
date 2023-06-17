import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProduct=createAsyncThunk(
    "products/getProduct",
    async()=>{
const response=await axios.get("https://fakestoreapi.com/products")
// console.log(response.data);
return response.data
    }
)
const initialState={
   Product:[],
    Status:null
}
const ProductReducer=createSlice({
    name:"product",
    initialState,
    extraReducers:{
[getProduct.pending]:(state,action)=>{
    state.Status="pending"
},
[getProduct.fulfilled]:(state,action)=>{
    state.Status="fulfilled"
    state.Product=action.payload
},
[getProduct.rejected]:(state,action)=>{
    state.Status="rejected"
}

    }
})
export default ProductReducer.reducer