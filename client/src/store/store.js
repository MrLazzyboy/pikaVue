import Vue from 'vue'
import Vuex from 'vuex'
import request from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: {}
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    },
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = {}
      localStorage.removeItem('pikavueAuth')
    },
    savePost (state, post) {
      state.posts = state.posts.map(row => {
        if (parseInt(row.id) === parseInt(post.id)) {
          row = post
        }
        return row
      })
    },
    deletePost (state, id) {
      state.posts = state.posts.filter(row => parseInt(row.id) !== parseInt(id))
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      request
        .getAllPosts()
        .then(resp => commit('setPosts', resp.data))
    },
    fetchUser ({ commit }, user) {
      commit('setUser', user)
    },
    logout ({ commit }) {
      commit('clearUser')
      return true
    },
    createPost ({ dispatch }, post) {
      return request.savePost(post).then(() => {
        dispatch('fetchPosts')
      })
    },
    deletePost ({ commit }, id) {
      request.deletePost(id).then(() => {
        commit('deletePost', id)
      })
    }
  }
})
