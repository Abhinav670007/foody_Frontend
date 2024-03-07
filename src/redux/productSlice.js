import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState ={
    productList : [],
    cartItem:[]
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataproduct : (state,action)=>{
            state.productList = [...action.payload]
        },
        addCartItems:(state,action)=>{
    const check = state.cartItem.some((el)=>el._id === action.payload._id)
            if(check){
                toast.warn("Already in the cart")
            }
            else {

                toast.success("item added succesfully")
                const total = action.payload.price
            state.cartItem= [...state.cartItem,{...action.payload, qty : 1,total : total},];
            }
            
        },
        deleteCartItems:(state,action)=>{
            toast.error("item deleted")
          const index = state.cartItem.findIndex((res)=>res._id ===action.payload)
          state.cartItem.splice(index,1)  
        },
        incrementQty:(state,action)=>{
          const index = state.cartItem.findIndex((res)=>res._id ===action.payload)
            let qty=state.cartItem[index].qty
            const qtyInc  = ++qty
            state.cartItem[index].qty = qtyInc

           const price = state.cartItem[index].price
           const total = price*qtyInc 
           state.cartItem[index].total=total
        },
        decrementQty:(state,action)=>{
            const index = state.cartItem.findIndex((res)=>res._id ===action.payload)
            let qty=state.cartItem[index].qty
            const qtyDec  = --qty

            const price = state.cartItem[index].price
           const total = price*qtyDec 
           state.cartItem[index].total=total

            if(qty > 1){
                state.cartItem[index].qty = qtyDec
            }
        }
    }
})

export const {setDataproduct,addCartItems,deleteCartItems,incrementQty,decrementQty}= productSlice.actions

export default productSlice.reducer