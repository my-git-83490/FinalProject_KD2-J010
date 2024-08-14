import httpClient from '../components/httpCommon'

const getAllClothingItems = () => {
    return httpClient.get('/api/clothingItems');
}

const getClothingItemsBySellerId = (id) => {
    return httpClient.get(`/api/clothingItems/seller/${id}`)
}

const getProductById = (id) => {
    return httpClient.get(`/api/clothingItems/${id}`)
}

const updateProduct = (id, data) => {
    return httpClient.put(`/api/clothingItems/${id}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

const deleteProductById = (id) => {
    return httpClient.delete(`/api/clothingItems/${id}`);
}

const uploadProduct = (formData) => {
    return httpClient.post(`/api/clothingItems/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

}

export default { getAllClothingItems, getClothingItemsBySellerId, getProductById, updateProduct, deleteProductById, uploadProduct }