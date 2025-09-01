// Ducks pattern
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
};

const initialState: CounterState = {
    value: 10
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // increment
        increment(state) {
            state.value++
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        }


        // decrement

    }
})

export const { increment, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer