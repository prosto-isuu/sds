import { createSlice } from '@reduxjs/toolkit'
import {counterSchema} from "../types/counterSchema";

const initialState:counterSchema = {
    value: 4,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
    }
})

export const { actions: CounterActions } = counterSlice;
export const { reducer: CounterReducer } = counterSlice;