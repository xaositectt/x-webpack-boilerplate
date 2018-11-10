import * as three from 'three'

export function pointLight({colorCode, x = 0, y = 0, z = 0}) {
  const light = new three.PointLight(colorCode)
  light.position.x = x
  light.position.y = y
  light.position.z = z
  return light
}
