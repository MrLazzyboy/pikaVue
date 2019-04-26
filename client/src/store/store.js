import Vue from 'vue'
import Vuex from 'vuex'
import request from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    users: []
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      request
        .getAllPosts()
        .then(resp => commit('setPosts', resp.data))
    }
  }
})
