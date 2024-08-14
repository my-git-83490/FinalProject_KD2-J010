import httpClient from '../components/httpCommon'

const getAll = () => {
    return httpClient.get('/api/categories')
}

const getCategoryById = (id) => {
    return httpClient.get(`/api/categories/${id}`)
}



export default { getAll, getCategoryById }