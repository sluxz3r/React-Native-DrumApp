import axios from 'axios';

// const url = 'http://192.168.6.199:8000'
const url = 'https://mydrum-app.herokuapp.com'



export const getUserId = (userid) => {
    return {
        type: 'GET_USERID',
        payload: axios.get(`${url}/user/${userid}`,
            {
                headers: {
                    "authorization": "x-control-user",
                }
            }),

    }
};

export const updateScore = (scores, userid) => {
    return {
        type: 'UPDATE_SCORE',
        payload: axios.patch(`${url}/user/score/${userid}`, {scores:scores},
            {
                headers: {
                    "authorization": "x-control-user",
                }
            }),

    }
};