<template>
<div>
    <div class="row">
        <div class="col-3">
          <img class="logo-placeholder" src="https://static.jsbin.com/images/dave.min.svg" alt="">
        </div>
        <div class="col-8 ml-5">
            <h4>Short Description of object</h4>
            <p>{{ test }}</p>
        </div>
    </div>
    <hr>
</div>
</template>

<script>
export default {
  data() {
    return {
      test: 'test123',
    };
  },
  methods: {
  },
};
</script>

<style scoped>
h4 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
img {
  max-width: 200px;
}
  p {
    font-family: 'Courier New', Courier, monospace;
  }
</style>
