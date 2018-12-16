<template>
  <!-- Footer -->
  <footer class="footer">&#64;Powered By Foundation, Vue.js, MySQL & Flask</footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .footer {
    background: #3B3F45;
    color: #ffff;
    position: absolute;
    text-align: center;
    font-size: small;
    width: 100%;
    height: 60px;
    line-height: 60px;

  }
</style>