<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div class="container">
      <table>
        <Profile/>
        <p>bla</p>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Profile from './profile/Profile.vue';

export default {
  components: {
    Navbar,
    Profile,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  table {
    margin-top: 30px;
  }
</style>
