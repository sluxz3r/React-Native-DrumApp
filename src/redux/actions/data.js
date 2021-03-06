import axios from 'axios';

// const url = 'http://192.168.6.199:8000'
const url = 'https://mydrum-app.herokuapp.com'

export const getUser = () => {
    return {
        type: 'GET_DATA',
        payload: axios.get(`${url}/user/`,
            {
                headers: {
                    "authorization": "x-control-user",
                }
            }),

    }
};