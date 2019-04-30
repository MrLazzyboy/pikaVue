<template>
  <form @submit.prevent="$emit('submitted')">
    <div class="form-group">
      <label for="username">Username:</label>
      <input
        id="username"
        v-model="user.username"
        type="username"
        name="username"
      >
    </div>
    <div
      v-if="typeof user.name !== 'undefined'"
      class="form-group"
    >
      <div>
        <label for="name">Name:</label>
        <input
          id="name"
          v-model="user.name"
          type="name"
          name="name"
        >
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input
          id="email"
          v-model="user.email"
          type="email"
          name="email"
        >
      </div>
    </div>
    <div class="btn-section">
      <button class="btn">
        {{ authText.submit }}
      </button>
      <router-link
        class="btn btn-link"
        :to="{
          name: authText.link
        }"
      >
        {{
          authText.submit === 'Register' ? 'Login' : 'Register'
        }}
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    authText () {
      return {
        submit: this.$route.name === 'register-page' ? 'Register' : 'Login',
        link:
          this.$route.name === 'register-page' ? 'login-page' : 'register-page'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  input {
    margin:10px 0 0 36px;
  }

  #username {
    margin-left: 10px
  }

  .btn-section{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }

</style>
