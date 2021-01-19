import axios from 'axios'
const setttingURL = 'https://api.chotdon.vn/api/setting'
const orderURL = 'https://api.chotdon.vn/api/order'

export const getSetting = (type) => {
    return axios.post(setttingURL, {
        type: type
    })
}

export const getOrders = (data) => {
    return axios.post(orderURL, {
        filter: data
    })
}