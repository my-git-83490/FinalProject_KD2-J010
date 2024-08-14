import axios from 'axios';

// Create an instance of axios
const httpClient = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in all requests
httpClient.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token'); // Retrieve the token
        console.log(token)
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`; // Add the Bearer token to the headers
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default httpClient;
