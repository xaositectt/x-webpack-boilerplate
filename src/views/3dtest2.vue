<template>
  <div>
    <div id="threecontainer"></div>
  </div>
</template>

<script>
import * as three from 'three'
import { sphere, cube } from 'src/3d/shapes'
import { lambertMaterial, phongMaterial } from 'src/3d/materials'
import * as colors from 'src/3d/colors'
import { pointLight } from 'src/3d/light'

export default {
  name: 'threeTest',
  data() {
    return {
      sceneOptions: {
        width: 400,
        height: 300
      },
      cameraOptions: {
        angle: 45,
        aspect: this.getAspect,
        near: 0.1,
        far: 10000
      },
    }
  },
  computed: {
    getAspect() {
      return this.sceneOptions.width / this.sceneOptions.height
    }
  },
  methods: {
    init() {
      const renderer = this.renderer(800, 600)
      const container = document.querySelector('#threecontainer')
      container.appendChild(renderer.domElement);

      const scene = new three.Scene();
      const camera = this.camera(this.cameraOptions)

      const sphereOne = sphere({ material: lambertMaterial(colors.RED), z: -300 })
      const sphereTwo = sphere({ material: lambertMaterial(colors.GREEN), x: -100, z: -300 })
      const sphereThree = sphere({ material: lambertMaterial(colors.BLUE), x: 100, z: -300 })
      const cubeOne = cube({ size: 20, material: phongMaterial(colors.YELLOW), x: -30, z: -200})
      const cubeTwo = cube({ size: 20, material: phongMaterial(colors.WHITE), x: 30, z: -200})

      const light = pointLight(colors.WHITE)

      scene.add(camera)

      scene.add(sphereOne)
      scene.add(sphereTwo)
      scene.add(sphereThree)

      scene.add(cubeOne)
      scene.add(cubeTwo)

      scene.add(light)

      console.log(sphere)
      function update () {
        // Draw!
        renderer.render(scene, camera);

        // Schedule the next frame.
        requestAnimationFrame(update);
      }

      // Schedule the first frame.
      requestAnimationFrame(update);
    },
    renderer(width, height) {
      const renderer = new three.WebGLRenderer()
      renderer.setSize(width, height)
      return renderer
    },
    camera({angle = 45, aspect= 1.3, near = 0.1, far = 10000}) {
      return new three.PerspectiveCamera(angle, aspect, near, far)
    },
    animate: function() {
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss">
</style>
