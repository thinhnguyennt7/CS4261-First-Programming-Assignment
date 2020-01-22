import axios from 'react-native-axios';
const baseURL = 'https://cs4261-assignment.herokuapp.com';

const httpGet = (endpoint) => {
    return new Promise(resolve => {
        axios.get(`${baseURL}/${endpoint}`)
        .then(response => resolve(response))
        .catch(error => resolve(error));
    });
};

const httpPost = (endpoint, data) => {;
    return new Promise(resolve => {
        axios.post(`${baseURL}/${endpoint}`, JSON.stringify(data),{headers:{"Content-Type" : "application/json"}})
        .then(response => resolve(response))
        .catch(error => resolve(error));
    });
};

export default { httpGet, httpPost };