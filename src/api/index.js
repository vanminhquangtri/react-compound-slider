import axios from 'axios'
const setttingURL = 'https://api.chotdon.vn/api/setting'

export const getSetting = (type) => {
    return axios.post(setttingURL, {
        type: type
    })
}