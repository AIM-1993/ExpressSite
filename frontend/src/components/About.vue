<template>
  <div id="About">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  name: 'About',
  props: {
    msg: String
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>