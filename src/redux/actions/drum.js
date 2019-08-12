import axios from 'axios';

const url = 'http://192.168.6.199:9090'


export const getDrum = () => {
    return {
        type: 'GET_DRUM',
        payload: axios.get(`${url}/drum/set/`,
            {
                headers: {
                    "authorization": "x-control-user",
                }
            }),

    }
};