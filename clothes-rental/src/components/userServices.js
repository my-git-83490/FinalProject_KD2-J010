import httpClient from '../components/httpCommon'

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
    return httpClient.post('/api/users/login', data);
}

const updateUser = (id, data) => {
    return httpClient.put(`/api/users/${id}`, data);
}

const deleteUser = (id) => {
    return httpClient.delete(`/api/users/${id}`);
}

export default { getAll, getUserById, register, login, updateUser, deleteUser }