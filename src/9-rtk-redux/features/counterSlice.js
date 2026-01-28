import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (p)=> {
            p.value += 1
        },
        decrement: (i)=> {
            i.value -= 1
        },
        increaseByAmount: (i, action)=> {
            i.value += action.payload
        }
    }
})

export const { increment, decrement, increaseByAmount } = counterSlice.actions
export default counterSlice.reducer