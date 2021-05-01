<template>
    <div>
    <div class="header-img">
    <b-navbar toggleable="lg" type="dark" variant="dark bg-transparent" fixed="fixed-top">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <img class="logo-placeholder" src="../assets/StanDeVakmanLogo.png" alt="">
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <a href="/"><button class="btn btn-sm align-middle btn-outline-white"
            type="button" to="/" href="/">Books</button></a>
            <a href="/houses"><button class="btn btn-sm align-middle btn-outline-white"
            type="button" href="#">Houses</button></a>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <a href="/profile"><button class="btn btn-sm align-middle btn-outline-white"
            type="button" href="#">Profile</button></a>
            <Logout/>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
    </div>
</template>

<script>
import Logout from './auth/Logout.vue';

export default {
  components: {
    Logout,
  },
};
</script>

<style scoped>
  .logo-placeholder {
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
    max-block-size: 150px;
    color: whitesmoke;
    position: absolute;
    left: 50%;
    margin-left: -75px !important;  /* 50% of your logo width */
    margin-top: 105px;
    display: block;
  }

  .header-img {
  width: 100%;
  height: 170px;
  background-color: #9799BA;
  background-image:
    linear-gradient(
      #9799BA, #b5a1c7
    );
  background-size: cover;
  padding: 0rem;
}
.btn-outline-white {
  border-color: whitesmoke;
  border-radius: 0%;
  border-width: 1px;
  color: whitesmoke;
  font-family: 'Courier New', Courier, monospace;
  margin: 7px;
}
</style>
