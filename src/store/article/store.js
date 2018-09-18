import * as actions from './actions'
import * as getters from './getters'
import {
  REDUCE_ARTICLES_POINTS,
  RESET_ARTICLES_STATE,
  SET_ARTICLES_LOADED,
  RESET_ARTICLES_LOADED,
  SET_ARTICLES
} from '../mutations'

const initialState = {
  articles: [],
  loaded: false
}

const state = Object.assign({}, initialState)

const  mutations = {
  [REDUCE_ARTICLES_POINTS]: (state, payload) => {
    state.articles.forEach(article => {
      article.points -= payload.amount
    })
  },
  [RESET_ARTICLES_STATE]: state => {
    state = Object.assign(state, initialState)
  },
  [SET_ARTICLES_LOADED]: state => {
    state.loaded = true
  },
  [RESET_ARTICLES_LOADED]: state => {
    state.loaded = false
  },
  [SET_ARTICLES]: (state, { articles }) => {
    state.articles = articles
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
