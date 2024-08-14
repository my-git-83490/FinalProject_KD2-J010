import httpClient from './httpCommon'

const getAllRentalOrderItems = () => {
    return httpClient.post("/api/rentalOrderItems", {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const getRentalOrdersById = (id) => {
    return httpClient.get(`/api/rentalOrderItems/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const createRentalOrderItem = (data) => {
    return httpClient.post("/api/rentalOrderItems", data, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const updateRentalOrderItem = (id, data) => {
    return httpClient.put(`/api/rentalOrderItems/${id}`, data, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

const deleteRentalOrderItem = (id) => {
    return httpClient.delete(`/api/rentalOrderItems/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}

export default { getAllRentalOrderItems, getRentalOrdersById, createRentalOrderItem, updateRentalOrderItem, deleteRentalOrderItem }