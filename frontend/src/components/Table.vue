<template>
  <div id="container">
    <table class="table">
      <thead class="thead">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Username</th>
          <th scope="col">Score</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in tableData" :key="index">
          <th scope="row">{{data.id}}</th>
          <td>{{ data.username }}</td>
          <td>{{ data.score }}</td>
          <td>{{ data.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'Table',
  props: {
    msg: String
  },
  data () {
    return {
      tableData: ""
    }
  },
  created: function () {
    this.loadData();
  },
  methods: {
    loadData: function () {
      this.$ajax.get('http://localhost:3000/')
      .then((response) => {
        this.tableData = response.data.result
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
  .table {
    width: 60%;
    position: relative;
    margin:20px auto;
  }

  .table thead {
    background-color: #37B6CE;	
  }

  tbody {
    background-color: #ffffef;
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

  .table {
    width: 60%;
    position: relative;
    margin:20px auto;
  }

  .table thead {
    background-color: #37B6CE;	
  }

  tbody {
    background-color: #ffffef;
  }

  h2 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

}


</style>