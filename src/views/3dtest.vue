<template>
  <div>
    <div>
      this is the 3d page
    </div>
    <div id="3d-container"></div>
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  computed: {
    width() {
      return window.innerWidth * 0.9
    },
    height() {
      return window.innerHeight * 0.9
    }
  },
  methods: {
    init: function() {
      let container = document.getElementById('3d-container');

      this.camera = new Three.PerspectiveCamera(70, this.width/this.height, 0.01, 10);
      this.camera.position.z = 1;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer(
        {
          antialias: true
        });

      this.renderer.setSize(this.width, this.height);
      container.appendChild(this.renderer.domElement);
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    console.log(this.width)
    console.log(this.height)
    this.init();
    this.animate()
  }
}
</script>

<style lang="scss">
</style>
