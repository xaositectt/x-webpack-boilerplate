<template>
  <div>
    <div id="threecontainer"></div>
  </div>
</template>

<script>
import * as three from 'three'

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
      lightOptions: {
        color: 0xFFFFFF,
        x: 10,
        y: 50,
        z: 130
      },
      sphereOptions: {
        radius: 50,
        segments: 10,
        rings: 10,
        material: this.material('lambert', 0xCC0000),
        x: 0,
        y: 0,
        z: -300
      }
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

      const sphere = this.sphere(this.sphereOptions)

      const pointLight = this.light(this.lightOptions)

      scene.add(camera)
      scene.add(sphere)
      scene.add(pointLight)

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
    light({color, x = 0, y = 0, z = 0}) {
      const light = new three.PointLight(color)
      light.position.x = x
      light.position.y = y
      light.position.z = z
      return light

    },
    material(type, colorCode) {
      let material
      if (type === 'basic') {
        material = new three.MeshBasicMaterial({ color: colorCode })
      } else if (type === 'lambert') {
        material = new three.MeshLambertMaterial({ color: colorCode })
      } else if (type === 'phong') {
        material = new three.MeshBasicMaterial({ color: colorCode })
      } else {
        throw new TypeError('wrong material type');
      }
      return material
    },
    sphere({radius, segments, rings, material, x = 0, y = 0, z = 0}) {
      const sphere = new three.Mesh(new three.SphereGeometry(radius, segments, rings), material)
      sphere.position.x = x
      sphere.position.y = y
      sphere.position.z = z
      return sphere
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
