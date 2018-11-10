import * as three from 'three'

export function sphere({radius = 10, segments = 10, rings = 10, material, x = 0, y = 0, z = 0}) {
  const sphere = new three.Mesh(new three.SphereGeometry(radius, segments, rings), material)
  sphere.position.x = x
  sphere.position.y = y
  sphere.position.z = z
  return sphere
}

export function cube({size= 10, widthSegments = 10, heightSegments = 10, depthSegments = 10, material, x = 0, y = 0, z = 0}) {
  const cube = new three.Mesh(new three.CubeGeometry(size, size, size, widthSegments, heightSegments, depthSegments), material)
  cube.position.x = x
  cube.position.y = y
  cube.position.z = z
  return cube
}
