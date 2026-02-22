import {createSlice} from "@reduxjs/toolkit";

const slice=createSlice({
    name: "selectedTime",
    initialState: {
        date: null,
        time: null,
        category: null,
        specialist: null,
        service: null
    },
    reducers: {
    updateTime: (state, action) => {
        state.date=action.payload.date;
        state.time=action.payload.time;
        state.specialist=action.payload.specialist;
        state.service=action.payload.service;
        state.category=action.payload.category;
    }
    }
})

export const {updateTime} = slice.actions;
export default slice.reducer;