<template>
  <div class="login-form">
    <h1 class="title">
      Register Page
    </h1>
    <AuthForm
      :user="user"
      @submitted="register"
    />
  </div>
</template>

<script>
import request from '../services/api'
import AuthForm from '../components/Authform.vue'

export default {
  name: 'RegisterPage',
  components: {
    AuthForm
  },
  data () {
    return {
      user: this.resetUser()
    }
  },
  methods: {
    register () {
      if (!this.user.username || !this.user.name) { return alert('Username and Name can not be empty!') }

      request.getUser(this.user.username).then(resp => {
        if (resp.data.length > 0) {
          alert('Username already exists!')
          this.user = this.resetUser()
        } else {
          this.saveUser()
        }
      })
    },
    saveUser () {
      request
        .saveUser(this.user)
        .then(resp => {
          localStorage.setItem('pikavueAuth', JSON.stringify(resp.data))
          this.$store.dispatch('fetchUser', resp.data)
          this.user = this.resetUser()
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          console.log('Error: ', error.message)
        })
    },
    resetUser () {
      return {
        username: null,
        name: null,
        email: null
      }
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
