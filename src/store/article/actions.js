import articles from 'src/api/articles'
import {
  REDUCE_ARTICLES_POINTS,
  RESET_ARTICLES_STATE,
  SET_ARTICLES_LOADED,
  RESET_ARTICLES_LOADED,
  SET_ARTICLES
} from '../mutations'

export const fetchArticles = ({ commit }) => {
  articles.get().then(res => {
    console.log(res)
    console.log(SET_ARTICLES)
    commit(SET_ARTICLES, res.data)
    commit(SET_ARTICLES_LOADED)
  }).catch(err => {
    console.log(err)
  })
}

export const reduceArticlesPoints = ({ commit }, payload) => {
  commit({type: REDUCE_ARTICLES_POINTS, amount: payload})
}

export const resetArticlesState = ({ commit }) => {
  commit(RESET_ARTICLES_STATE)
}

export const setArticlesLoaded = ({ commit }) => {
  commit(SET_ARTICLES_LOADED)
}

export const resetArticlesLoaded = ({ commit }) => {
  commit(RESET_ARTICLES_LOADED)
}
