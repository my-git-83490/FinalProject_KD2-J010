import httpClient from '../components/httpCommon'

const getAll = () => {
    return httpClient.get('/api/categories', {

        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    })
}

const getCategoryById = (id) => {
    return httpClient.get(`/api/categories/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}



export default { getAll, getCategoryById }