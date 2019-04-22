import Api from './api'

export default {
  register (credential) {
    return Api().post('register', credential)
  }
}

// AuthenticationService.register({
//   email: 'test@gmail.com',
//   password: '123123'
// })
