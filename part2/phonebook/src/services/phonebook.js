import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const fetchNumbers = () => {
    return axios.get(baseUrl).then(res => res.data)
}

const addNumber = (newNumber) => {
    return axios.post(baseUrl, newNumber).then(res => res.data)
}

const updateNumber = (numberId, newNumber) => {
    return axios.put(`${baseUrl}/${numberId}`, newNumber).then(res => res.data)
}

const deleteNumber = (numberId) => {
    return axios.delete(`${baseUrl}/${numberId}`)
}

export default { fetchNumbers, addNumber, updateNumber, deleteNumber }