import httpClient from '../components/httpCommon'

const getAll = () => {
    return httpClient.get('/api/clothingItems')
}

const create = (data) => {
    return httpClient.post('/api/clothingItems', data)
}

const get = (id) => {
    return httpClient.get(`/api/clothingItems/${id}`)
}

const update = (data) => {
    return httpClient.put(`/api/clothingItems/${data.id}`, data)
}

const remove = (id) => {
    return httpClient.delete(`/api/clothingItems/${id}`)
}

export default { getAll, create, get, update, remove }