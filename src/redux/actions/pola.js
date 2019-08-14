import axios from 'axios';

const url = 'http://192.168.6.199:9090'


export const getPola = () => {
    return {
        type: 'GET_POLA',
        payload: axios.get(`${url}/user/pola/`,
            {
                headers: {
                    "authorization": "x-control-user",
                }
            }),

    }
};