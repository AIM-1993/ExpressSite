<template>
  <div id="videopage">
    <Navbar />
    <Videoplayer />
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Videoplayer from './Videoplayer';
import Comments from './Comments';
import Footer from './Footer';

export default {
  name: 'VideoPage',
  components: {
    Navbar,
    Videoplayer,
    Comments,
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