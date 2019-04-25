<template>
  <a-layout id="app">
    <Header />
    <a-layout-content>
      <a-row :style="{height: '100%'}">
        <a-col
          :span="18"
          class="left-column"
        >
          <router-view />
        </a-col>
        <a-col
          :span="6"
          class="right-column"
        >
          <Sidebar />
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
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

  .right-column{
    height: 100%;
  }

  .left-column{
    height: 100%;
    overflow: auto;
  }
</style>
