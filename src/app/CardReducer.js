import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    card:[],
    CartQuantity:0,
    totalQuantity:0
}
const CaredReducer=createSlice({
    name:"Card",
    initialState,
    reducers:{
        addToCard:(state,action)=>{
            const newitem=action.payload.id
            const finddata=state.card.findIndex((item)=>item.id===newitem)
            console.log(finddata);
            if(finddata>=0){
                state.card[finddata].CartQuantity +=1
            }
            else{
                state.card.push({...action.payload,CartQuantity:1})
            }
        },
        increaseItem:(state,action)=>{
            console.log(action.payload);
            const findindex=state.card.findIndex((item)=>item.id===action.payload)
            if(state.card[findindex].CartQuantity){
                state.card[findindex].CartQuantity++
            }
        },
        DecreaseItem:(state,action)=>{
            const findindex=state.card.findIndex((item)=>item.id===action.payload)
            if(state.card[findindex].CartQuantity===1){
                const filteritem=state.card.filter((x)=>x.id!==action.payload)
                state.card=filteritem
            }else if(state.card[findindex].CartQuantity>=1){
                state.card[findindex].CartQuantity-=1
            }},
        DeleteAll:(state,action)=>{
            state.card=[]
        }
    }
})
export const {addToCard,increaseItem,DecreaseItem,DeleteAll}=CaredReducer.actions
export default CaredReducer.reducer