import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState={
    drawer: false,
}

const State =  createSlice({
    name:"technology",
    initialState,
    reducers:{
        drawer: (state, action:PayloadAction<boolean> ) => {
            state.drawer = action.payload;
        }
    },
    extraReducers:(builder)=>{
    }
})
export const { drawer } = State.actions;

export default State.reducer;