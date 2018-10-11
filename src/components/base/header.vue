<template>
  <el-menu
  mode="horizontal"
  class="main-header"
  :background-color=backgroundColor
  text-color="white"
  >
  <el-submenu index="1">
    <template slot="title">javascript</template>
    <el-menu-item class="main-header__item" index="1-1">misc javascript</el-menu-item>
    <el-menu-item class="main-header__item" index="1-2">javascript patterns</el-menu-item>
    <el-menu-item class="main-header__item" index="1-3">javascript data structures</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">graphics</template>
    <el-menu-item class="main-header__item" index="2-1">art</el-menu-item>
    <el-menu-item class="main-header__item" index="2-2">svg</el-menu-item>
    <el-menu-item class="main-header__item" index="2-3">css</el-menu-item>
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
        backgroundColor: colors.darkblue
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMe(){
        console.log(colors.purpleblue)
      }
    }
  }
</script>

<style lang="scss">
.main-header {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
  .main-header__item{
    color: black;
  }

}
</style>
