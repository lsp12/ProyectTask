import { createAsyncThunk } from "@reduxjs/toolkit";
import { getForEmail, getTaskController, setTask } from "../../Controller/tasksService";
import { IFormAuthor } from "../../Interface/Interface";

export const PostTask = createAsyncThunk("tasks/getTask", async (task: IFormAuthor) => {
    try {
        const data = setTask(task);
        
    } catch (e: any) {
        console.log(e);
        /* window.location.href = "https://stackoverflow.com/search?q=[js]+" + e.message; */
    }
});

export const getTask = createAsyncThunk("tasks/getTask", async () => {
    try {
        const res = getTaskController();
        return (await res).data.body.res.Items;
    } catch (e: any) {
        console.log(e);
        /* window.location.href = "https://stackoverflow.com/search?q=[js]+" + e.message; */
    }
})

export const getEmail = createAsyncThunk("tasks/getEmail", async (email: string) => {
    try {
        const res = getForEmail(email);
        return (await res).data.body;
    } catch (e: any) {
        console.log(e);
        
    }
})

