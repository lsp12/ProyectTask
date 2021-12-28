import axios from 'axios';
import { IAWS, IAWSEmail, IFormTask } from '../Interface/Interface';
const API = 'https://111ty2ejwf.execute-api.us-west-2.amazonaws.com/';

export const getTaskController = async ():Promise<IAWS> => {
    return await axios.get(`${API}task`);
}

export const setTask = async (task:IFormTask) => {
    return await axios.post(`${API}task`, task);
}

export const getForEmail = async (email:string):Promise<IAWSEmail> => {
    return await axios.post(`${API}email`, {email:email});
}