import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    data: [{
        name: 'Item 1',
        points: 1
      },
      {
        name: 'Item 2',
        points: 2
      }
    ]
  },
  getters: {
    getDouble: state => {
      let doubleData = state.data.map(data => {
        return {
          name: data.name,
          points: data.points * 2
        }
      })
      return doubleData
    },
    getData: state => {
      return state.data
    }
  },
  mutations: {
    multiplyPoints: (state, payload) => {
      state.data.forEach(data => {
        data.points *= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('multiplyPoints', payload)
      }, 1000)
    }
  }
})

export default store
