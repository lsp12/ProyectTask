import axios from 'axios';
const API = 'https://111ty2ejwf.execute-api.us-west-2.amazonaws.com/';

export const getHello = async () => {
    return await axios.get(`${API}task`);
}