// import httpClient from '../components/httpCommon'
import httpClient from "./httpCommon"

const getAll = () => {
    return httpClient.get('/api/users')
}

const getUserById = (id) => {
    return httpClient.get(`/api/users/${id}`)
}
const register = (data) => {
    return httpClient.post('/api/users/register', data);
}

const login = (data) => {
    return httpClient.post('/api/users/login', data).then(response => {
        const token = response.data.token;
        sessionStorage.setItem('token', token); // Save the token
        return response;
    });
}

const updateUser = (id, data) => {
    return httpClient.put(`/api/users/${id}`, data);
}

const deleteUser = (id) => {
    return httpClient.delete(`/api/users/${id}`);
}

const forgotPassword = (data) => {
    return httpClient.post('/api/users/forgot-password', data)
}

const resetPassword = (data) => {
    return httpClient.post('/api/users/reset-password', data)
}

export default { getAll, getUserById, register, login, updateUser, deleteUser, forgotPassword, resetPassword }