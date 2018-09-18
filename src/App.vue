<template>
  <div>
    <div v-for="article in getArticles">
      <div>{{ article.name }}</div>
      <div>{{ article.points }}</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
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
