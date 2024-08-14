import httpClient from '../components/httpCommon'

const getAllCartItems = () => {
    return httpClient.get("/api/cartItems")
}

const getCartItemById = (id) => {
    return httpClient.get(`/api/cartItems/${id}`)
}

const createCartItem = (data) => {
    return httpClient.post("/api/cartItems", data)
}

const updateCartItem = (id, data) => {
    return httpClient.put(`/api/cartItems/${id}`, data)
}

const deleteCartItem = (id) => {
    return httpClient.delete(`/api/cartItems/${id}`)
}

export default { getAllCartItems, getCartItemById, createCartItem, updateCartItem, deleteCartItem }