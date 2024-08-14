import httpClient from '../components/httpCommon'

const getAllClothingItems = () => {
    return httpClient.get('/api/clothingItems', {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const getClothingItemsBySellerId = (id) => {
    return httpClient.get(`/api/clothingItems/seller/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const getProductById = (id) => {
    return httpClient.get(`/api/clothingItems/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const updateProduct = (id, data) => {
    return httpClient.put(`/api/clothingItems/${id}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')

        }
    });
}

const deleteProductById = (id) => {
    return httpClient.delete(`/api/clothingItems/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    });
}

const uploadProduct = (formData) => {
    return httpClient.post(`/api/clothingItems/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    });

}

export default { getAllClothingItems, getClothingItemsBySellerId, getProductById, updateProduct, deleteProductById, uploadProduct }