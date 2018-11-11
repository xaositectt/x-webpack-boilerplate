<template>
  <div @click="() => $router.push({ name: route })" class="menu__link ph2 v-mid f4">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.menu__link {
  height: 100%;
  line-height: 30px;
  &:hover {
    background-color: #7a95c1;
    }
  }
</style>
