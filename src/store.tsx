import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { numberIncrement } from "./slices/numberIncrement";


const reducer=combineReducers({
   reusable:numberIncrement.reducer
})

export const store=configureStore({
    reducer:reducer
})