<template>
  <a-layout class="home">
    <h1>Resent post</h1>
    <PostList />
  </a-layout>
</template>

<script>
import PostList from '../components/PostList'

export default {
  name: 'Home',
  components: {
    PostList
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  }
}
</script>

<style lang="scss" scoped>

  .home{
    padding: 50px 50px 0 50px;

    h1{
      font-weight: bold;
      margin-bottom: 20px;
    }
  }

</style>
