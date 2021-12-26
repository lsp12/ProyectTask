import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState={
    drawer: false,
    publish:"Private",
}

const State =  createSlice({
    name:"technology",
    initialState,
    reducers:{
        publishTaks: (state, action:PayloadAction<string> ) => {
            state.publish = action.payload;
        },
        drawer: (state, action:PayloadAction<boolean> ) => {
            state.drawer = action.payload;
        },
    },
    extraReducers:(builder)=>{
    }
})
export const { drawer, publishTaks } = State.actions;

export default State.reducer;