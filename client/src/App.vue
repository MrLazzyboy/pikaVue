<template>
  <a-layout id="app">
    <Header></Header>
    <a-row>
      <a-col :span="20">
        <router-view/>
      </a-col>
      <a-col :span="4">
        <Sidebar></Sidebar>
      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">

  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }
</style>
