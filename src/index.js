import elements from 'src/app'

const renderApp = () => {
  let app = document.getElementById('app')
  app.removeChild(btn)

  let btn = elements.printButton
  app.appendChild(btn)
}

let btn = elements.printButton
document.getElementById('app').appendChild(btn)

if (module.hot) {
  module.hot.accept('src/app', () => {
    renderApp()
    console.log('rendering changes...')
  })
}
