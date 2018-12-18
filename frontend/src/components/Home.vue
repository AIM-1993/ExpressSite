<template>
  <div id="home">
    <Navbar />
    <div id="container">
      <div class="jumbotron">
        <h1 class="display-4">Welcome come to Zentable!</h1>
        <p class="lead">This is a simple funny-video share site, you can enjoy yourself here.</p>
        <hr class="my-4">
        <p class="lead">
          <a class="btn btn-warning" href="#/video" role="button">Show me some!</a>
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