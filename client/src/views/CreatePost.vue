<template>
  <div class="new-post">
    <h3>Create New Post</h3>
    <form @submit.prevent="savePost">
      <div class="form-group">
        <label>Title</label><br>
        <input
          v-model="post.title"
          type="text"
          name="title"
        >
      </div>
      <div class="form-group">
        <label>Description</label><br>
        <textarea
          v-model="post.description"
          name="description"
          rows="2"
        />
      </div>
      <div class="form-group">
        <label>Content</label><br>
        <textarea
          v-model="post.content"
          name="content"
          rows="5"
        />
      </div>
      <div class="form-group">
        <button class="btn">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: this.initialPost()
    }
  },
  methods: {
    initialPost () {
      return {
        title: null,
        description: null,
        content: null,
        img: 'https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg',
        author: this.$store.state.user.name
      }
    },
    savePost () {
      if (!this.post.title) {
        alert('Title cant be empty!')
        return true
      }
      this.$store.dispatch('createPost', this.post).then(() => {
        this.post = this.initialPost()
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  .new-post {
    width: 30%;
    margin: 50px auto;

    input, textarea {
      width: 100%;
    }

    .btn{
      margin-top: 10px;
    }
  }

</style>
