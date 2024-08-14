import httpClient from './httpCommon'

const createRentalOrder = (data) => {
    return httpClient.post("/api/rental-orders/create", data, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const getRentalOrdersByUserId = (userId) => {
    return httpClient.get(`/api/rental-orders/user/${userId}`, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

export default { createRentalOrder, getRentalOrdersByUserId }