<template>
  <div>
    <h1>This is the about page</h1>
    <div v-for="data in getData">
      <div>{{ data.name }}</div>
      <div>{{ data.points }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
     ...mapGetters([
      'getData'
    ])
  }
}
</script>
