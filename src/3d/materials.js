import * as three from 'three'

export function basicMaterial(colorCode) {
  let material
  material = new three.MeshBasicMaterial({ color: colorCode })
  return material
}

export function lambertMaterial(colorCode) {
  let material
  material = new three.MeshLambertMaterial({ color: colorCode })
  return material
}

export function phongMaterial(colorCode) {
  let material
  material = new three.MeshPhongMaterial({ color: colorCode })
  return material
}
