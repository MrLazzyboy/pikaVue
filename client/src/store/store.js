import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        title: 'Main post title',
        img: 'img URL',
        author: 'Andrei Gorinchoy',
        time: null,
        raiting: 0,
        content: 'Main post content, Main post content Main post content Main post content Main post content Main post content '
      },
      {
        title: 'Main post title',
        img: 'img URL',
        author: 'Andrei Gorinchoy',
        time: null,
        raiting: 0,
        content: 'Main post content, Main post content Main post content Main post content Main post content Main post content '
      },
      {
        title: 'Main post title',
        img: 'img URL',
        author: 'Andrei Gorinchoy',
        time: null,
        raiting: 0,
        content: 'Main post content, Main post content Main post content Main post content Main post content Main post content '
      },
      {
        title: 'Main post title',
        img: 'URL',
        author: 'MrLazzyboy',
        time: null,
        raiting: 0,
        content: 'More content to more usefull stuff and this will never end'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
