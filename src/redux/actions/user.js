import axios from 'axios';
import {AsyncStorage} from 'react-native';

const url = 'http://192.168.6.199:9090'

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/register`, data)
     
    }
};


export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login/`, data, {
            headers: {
                "authorization": "x-control-user",
            }
        }).then( res => {
            const token = res.data.result.token;
            const userid = res.data.result.userid.toString();
            const fullname = res.data.result.fullname;
            const email = res.data.result.email;
    
            AsyncStorage.setItem('userid', userid);
            AsyncStorage.setItem('name', fullname);
            AsyncStorage.setItem('email', email);
            AsyncStorage.setItem('jwtToken', token);
           
        })
    }

};

export const logout = (userid) => {
    return {
        type: 'LOGOUT', userid,
        payload: axios.patch(`${url}/logout/${userid}`,{
            headers: {
                "authorization": "x-control-user",
            }
        })
     
    }
};