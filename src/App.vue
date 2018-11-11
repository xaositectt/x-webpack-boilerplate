<template>
  <div>
    <base-header></base-header>
    <div v-for="article in getArticles">
      <div>{{ article.name }}</div>
      <div>{{ article.points }}</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import  BaseHeader from './components/base/basic_header'

export default {
  name: 'app',
  components: {
    BaseHeader
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
