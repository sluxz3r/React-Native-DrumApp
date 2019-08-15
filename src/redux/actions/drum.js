import axios from 'axios';

// const url = 'http://192.168.6.199:8000'
const url = 'https://mydrum-app.herokuapp.com'



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