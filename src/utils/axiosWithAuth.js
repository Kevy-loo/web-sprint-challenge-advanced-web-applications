import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem("authToken");
    return axios.create({
        baseURL: "http://localhost:9000/api",
        headers: {
            Authorization: token
        }
    });
    
};

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth