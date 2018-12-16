<template>
  <div id="Nav">
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Nav {
    background-color: hsl( 15, 30%, 50% );
  }
</style>