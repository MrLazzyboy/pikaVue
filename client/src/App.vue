<template>
  <a-layout id="app">
    <Header />
    <router-view />
  </a-layout>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  created () {
    this.$store.dispatch(
      'fetchUser',
      !localStorage.getItem('pikavueAuth')
        ? {}
        : JSON.parse(localStorage.getItem('pikavueAuth'))
    )
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss" scoped>

  #app{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    height: 100vh;
  }

</style>
