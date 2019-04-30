<template>
  <a-layout-content>
    <h1>Resent post</h1>
    <a-row :style="{height: '93%'}">
      <a-col
        :span="20"
        class="left-column"
      >
        <a-list
          item-layout="vertical"
          size="large"
          :data-source="posts"
        >
          <a-list-item
            slot="renderItem"
            key="item.id"
            slot-scope="item"
          >
            <img
              slot="extra"
              width="200"
              alt="logo"
              :src="item.img"
            >
            <a-list-item-meta :description="item.description">
              <p slot="title">
                {{ item.title }}
              </p>
            </a-list-item-meta>
            {{ item.content }} <br>
            <a
              href="#"
              title="Delete"
              @click.prevent.stop="deletePost(item.id)"
            >Delete this post</a>
          </a-list-item>
        </a-list>
      </a-col>
      <a-col
        :span="4"
        class="right-column"
      >
        <Sidebar />
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name: 'PostList',
  components: { Sidebar },
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  created () {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    deletePost (id) {
      if (!confirm('Are you sure deleting this post?')) return false
      this.$store.dispatch('deletePost', id)
    }
  }
}
</script>

<style lang="scss" scoped>

  .right-column{
    height: 100%;
  }

  .left-column{
    height: 100%;
    overflow: auto;
  }

</style>
