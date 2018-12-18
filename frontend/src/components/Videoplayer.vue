<template>
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
    <Comments />
  </div>
  </div>
</template>

<script>
import Comments from './Comments';

export default {
  name: 'VideoPage',
  components: {
    Comments
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

<style scoped>

</style>

