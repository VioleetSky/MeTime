import {configureStore} from "@reduxjs/toolkit";
import selectedTimeReducer from "./slice/slice.jsx";

export const store=configureStore({
    reducer:{
        selectedTime:selectedTimeReducer,
    }
})