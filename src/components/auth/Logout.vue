<template>
  <button class="btn btn-sm align-middle btn-outline-white"
  type="button" v-on:click="logout">Logout</button>
  <!-- <b-nav-item href="#" v-on:click="logout">Logout</b-nav-item> -->
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('validTill');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>

.btn-outline-white {
  border-color: whitesmoke;
  border-radius: 0%;
  border-width: 2px;
  color: whitesmoke;
  font-family: 'Courier New', Courier, monospace;
}

</style>
