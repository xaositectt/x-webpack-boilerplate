<template>
  <div class="basic__header fixed w-100 top-0 z-1 bg-light-gray bb bw2 bd-blue-gray flex flex-row items-start items-center">
    <menu-link route="home">home</menu-link>
    <menu-link route="about">about</menu-link>
    <menu-link route="connect">connect</menu-link>
  </div>
</template>

<script>
import MenuLink from './menu_link'

export default {
  data() {
    return {
    }
  },
  components: {
    MenuLink
  }
}
</script>

<style lang="scss">
.basic__header {
  height: 30px;
}
</style>
