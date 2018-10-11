<template>
  <div>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navBar from 'src/components/base/header'

export default {
  name: 'app',
  components: {
    navBar
  },
  computed: mapGetters([
    'getArticles'
  ]),
  created() {
    this.$store.dispatch('initialize')
  }
}

</script>
<style lang="scss">
@import 'src/style/main.scss';
</style>
