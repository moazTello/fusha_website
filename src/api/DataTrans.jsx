import axios from 'axios';
const BASE_URL = '';

export default axios.create(
    {
        baseURL: BASE_URL,
        // headers: {
        //     'Content-Type' : 'application/json'
        // },
    }
);
export const axiosPrivate = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            // 'Vary':'Accept',
            'Content-Type' : 'application/json'
        },
        withCredentials: true,
    }
);