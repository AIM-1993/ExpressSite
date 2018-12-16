<template>
  <div id="Home">
    <Navbar />
    <Table />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Table from './Table';
import Footer from './Footer';


export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Navbar,
    Table,
    Footer
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>