<template>
  <div class="login-form">
    <h1 class="title">
      Login Page
    </h1>
    <AuthForm
      :user="user"
      @submitted="login"
    />
  </div>
</template>

<script>
import request from '../services/api'
import AuthForm from '../components/Authform.vue'

export default {
  name: 'LoginPage',
  components: {
    AuthForm
  },
  data () {
    return {
      user: {
        username: null
      }
    }
  },
  methods: {
    login () {
      if (!this.user.username) return alert('Username can not be empty!')

      request
        .getUser(this.user.username)
        .then(resp => {
          let auth = resp.data.filter(row => row.username === this.user.username)
          if (auth.length > 0) {
            localStorage.setItem('pikavueAuth', JSON.stringify(auth[0]))
            this.$store.dispatch('fetchUser', auth[0])
            this.$router.push({ path: '/' })
          } else {
            alert('User not found!')
          }
        })
        .catch(error => {
          console.log('Error: ', error.message)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  .title {
    text-align: center;
  }
  max-width: 20%;
  width: 100%;
  margin: 30px auto;
  padding: 20px 30px;
}
</style>
