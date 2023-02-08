import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    console.log('getAll')
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const add = (newPerson: any) => {
    console.log('add')
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}
      
      
export default {
    getAll,
    add
}