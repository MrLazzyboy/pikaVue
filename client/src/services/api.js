import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllPosts () {
    return request.get('/posts')
  }
}
