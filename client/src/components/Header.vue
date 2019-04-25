<template>
  <a-layout-header class="header">
    <a-col
      :span="4"
      class="logo"
    >
      <router-link to="/">
        PikaVue
      </router-link>
    </a-col>
    <a-row
      type="flex"
      justify="end"
    >
      <a-col :span="2">
        User
      </a-col>
      <a-col :span="2">
        Logout
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
export default {

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
}

</style>
