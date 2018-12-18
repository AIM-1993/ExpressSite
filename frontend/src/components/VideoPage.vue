<template>
  <div id="videopage">
    <Navbar />
    <Videoplayer />
    <Comments />
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


</style>