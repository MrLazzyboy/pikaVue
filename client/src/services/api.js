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
  },
  getUser (username) {
    return request.get('/users', {
      params: {
        username
      }
    })
  },
  saveUser ({ username, name, email, subcribtion = [] }) {
    return request.post('/users', {
      username,
      name,
      email,
      subcribtion
    })
  },
  deletePost (id) {
    return request.delete('/posts/' + id)
  },
  savePost (post) {
    return request.post('/posts', post)
  }
}
