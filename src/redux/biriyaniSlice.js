import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    orders:[]
}

const biriyaniSlice = createSlice({
    name:"biriyani",
    initialState,
    reducers:{
        orderBiriyani : (action,state) => {
            state.orders.push(action.payload)
        }
    }
})

export const {orderBiriyani} = biriyaniSlice.actions;

export default biriyaniSlice.reducer