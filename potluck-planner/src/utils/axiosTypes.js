import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        baseURL: 'https://potluck-planner-bw.herokuapp.com',
    });
};

export const axiosInstance = () => {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        baseURL: 'https://potluck-planner-bw.herokuapp.com',
    });
};
