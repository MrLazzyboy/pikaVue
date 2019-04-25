<template>
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
      {{ item.content }}
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  name: 'PostList',
  data () {
    return {
      posts: this.$store.state.posts
    }
  }
}
</script>
