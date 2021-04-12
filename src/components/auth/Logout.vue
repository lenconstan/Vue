<template>
    <b-nav-item href="#" v-on:click="logout">Logout</b-nav-item>
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
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>

</style>
