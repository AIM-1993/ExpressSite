<template>
  <div id="about">
    <Navbar />
    <div id="container">
      <label for="player">{{ videoname }}</label>
      <div class="jumbotron">
        <iframe
          id="player"
          :src="videoaddress"
          scrolling="no" 
          border="0" 
          frameborder="no" 
          framespacing="0" 
          allowfullscreen="true"
          width="800px"
          height="600px"
        > 
        </iframe>
      </div>
      <hr>
      <h4>评论</h4>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  name: 'Video',
  props: {
    msg: String
  },
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      videoaddress: "",
      videoname: ''
    }
  },
  created: function () {
    this.loadData();
  },
  methods: {
    loadData: function () {
      this.$ajax.get('http://localhost:3000/video')
      .then((response) => {
        this.videoaddress = "//" + response.data.result[0].videoaddress;
        this.videoname = response.data.result[0].videoname;
      });
    }
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

  #player {
    margin: 0 auto;
  }

  h2 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

}

</style>