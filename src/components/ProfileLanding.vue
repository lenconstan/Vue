<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div class="container mt-5">
      <h1 class="title">Profile:</h1>
      <Profileform/>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Profileform from './profile/Profileform.vue';

export default {
  components: {
    Navbar,
    Profileform,
  },
};
</script>

<style scoped>
  .title {
    font-family: 'Courier New', Courier, monospace;
    margin-left: 13px;
    margin-top: 20px;
  }
</style>
