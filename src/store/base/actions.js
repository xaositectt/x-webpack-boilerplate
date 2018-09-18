export const initialize = ({ dispatch }) => {
  dispatch('fetchArticles')
}

export const reset = ({ dispatch }) => {
  dispatch('resetArticlesState')
}
