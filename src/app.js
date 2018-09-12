import lib from 'src/js/calc.js'

function createInput(type, label, func) {
  const input = document.createElement("input")
  input.type = type
  input.value = label
  input.onclick = func
  return input
}

export default {
  printButton: createInput('button', 'click me', lib.calc)
}
