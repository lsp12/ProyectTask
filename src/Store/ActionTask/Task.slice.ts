
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTask } from "./Task.reducer";

const initialState = {
    loading: false,
    getTask: [],
}

const Tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTask.fulfilled, (state, action: PayloadAction<any>) => {
                state.getTask = action.payload;
                state.loading = false;
            })
            .addCase(getTask.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
            })
    }
});

export default Tasks.reducer;