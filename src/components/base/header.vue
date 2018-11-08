<template>
  <el-menu
  mode="horizontal"
  class="main-header"
  :background-color=backgroundColor
  :active-text-color=activeTextColor
  text-color="white"
  >
  <el-submenu index="1">
    <template slot="title">javascript</template>
    <el-menu-item index="1-1">misc javascript</el-menu-item>
    <el-menu-item index="1-2">javascript patterns</el-menu-item>
    <el-menu-item index="1-3">javascript data structures</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">graphics</template>
    <el-menu-item index="2-1">art</el-menu-item>
    <el-menu-item index="2-2">svg</el-menu-item>
    <el-menu-item index="2-3">css</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">todo app node.js</el-menu-item>
  <el-submenu index="4">
    <template slot="title">all my routes</template>
    <div v-for="(route, index) in routes" :key="index">
      <el-menu-item
      :index="'4-' + index"
      @click="() => {$router.push({ name: route.name })}"
      >{{ route.name }}</el-menu-item>
    </div>
  </el-submenu>
  </el-menu>
</template>

<script>
  import colors from 'src/style/colors.scss'

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        backgroundColor: colors.darkblue,
        activeTextColor: colors.active,
        routes: this.$router.options.routes
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created() {
      console.log(this.$router.options.routes)
    }
  }
</script>

<style lang="scss">
.main-header {
  font-family: Arial, Helvetica, sans-serif;

}
</style>
