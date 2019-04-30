<template>
  <a-layout class="home">
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
  },
  created () {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss" scoped>

  .home{
    padding: 50px 50px 0 50px;
  }

</style>
