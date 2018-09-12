export default {
  calc: function calc() {
    let { x, y, ...z } = { x: 12, y: 2, a: 3, b: 4 }
    console.log(x)
    console.log(y)
    console.log(z)
    console.log('SHIT')
  }
}
