<template>
  <div id="Home">
    <h1>Home</h1>
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';


export default {
  name: 'Home',
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
  #Nav {
    background-color: hsl( 15, 30%, 50% );
  }
</style>