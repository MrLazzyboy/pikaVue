<template>
  <a-layout-header class="header">
    <a-col
      :span="4"
      class="logo"
    >
      PikaVue
    </a-col>
    <nav>
      <template v-if="typeof user.id != 'undefined'">
        <router-link
          active-class="active"
          exact
          :to="{ name: 'home' }"
        >
          Home
        </router-link>
        <router-link
          active-class="active"
          exact
          :to="{ name: 'create' }"
        >
          Create
        </router-link>

        <!-- <router-link active-class="active" exact :to="{ name: 'about' }"
          >Events</router-link
        > -->
        <a
          href="javascript:void(0)"
          @click.prevent="logout"
        >Logout</a>
      </template>
      <template v-else>
        <router-link
          active-class="active"
          exact
          :to="{ name: 'login-page' }"
        >
          Login
        </router-link>
        <router-link
          active-class="active"
          exact
          :to="{ name: 'register-page' }"
        >
          Register
        </router-link>
      </template>
    </nav>
  </a-layout-header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'login-page' })
    }
  }
}
</script>

<style lang="scss" scoped>

.header{
  font-weight: bold;
  background-color: black;
  color: white;
  opacity:0.8;
  font-size: 16px;
  text-align: center;

  a {
    text-decoration: none;
    color:white;
  }

  .logo{
    font-size: 20px;
  }

  nav {
    flex-basis: 50%;
    text-align: right;
    a {
      margin-right: 50px;
      display: inline-block;
    }
  }
}

</style>
