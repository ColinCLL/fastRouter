<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>demo</h2>
  </div>
</template>

<script>
export default {
  name: 'myPage',
  data() {
    return {
      msg: 'this is test page 1',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 50px;
  text-align: center
}

</style>
