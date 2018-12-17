<template>
  <div id="about">
    <Navbar />
    <div id="container">
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
    </div>
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

@media screen and (min-width: 768px) and (max-width: 992px) {
  #container {
    position: relative;
    padding: 1.2%;
    margin: 10% 15%;
    background: #1111;
    min-height: 70vh;
    font-family: sans-serif;
  }

  h2 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
}

@media screen and (min-width: 992px){
    #container {
    position: relative;
    padding: 1.2%;
    margin: 20px 15%;
    background: #1111;
    min-height: 84vh;
    font-family: sans-serif;
  }

  h2 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

}

</style>