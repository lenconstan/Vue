<template>
    <div>
    <div class="header-img">
    <b-navbar type="dark" variant="dark bg-transparent" fixed="fixed-top" >
            <b-navbar-brand>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-nav>
                <!-- <a href="/">
                  <img class="logo-placeholder" src="../assets/StanDeVakmanLogo.png" alt="">
                </a> -->
                <a href="/"><img s src="../assets/StanDeVakmanLogo.png" alt=""></a>
                <a href="/"><button class="btn btn-sm align-middle btn-outline-white"
                type="button" to="/" href="/">Home</button></a>
                <a href="/houses"><button class="btn btn-sm align-middle btn-outline-white"
                type="button" href="#">Houses</button></a>
                <a href="/profile"><button class="btn btn-sm align-middle btn-outline-white"
                type="button" href="#">Profile</button></a>
                <Logout/>
            </b-navbar-nav>
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
  img {
    max-block-size: 50px;
  }
  .logo-placeholder {
    font-family: 'Courier New', Courier, monospace;
    align-content: center;
    font-size: 40px;
    max-block-size: 80px;
    color: whitesmoke;
    position: absolute;
    left: 50%;
    margin-left: 75px !important;  /* 50% of your logo width */
    margin-top: 0px;
    display: block;
  }

  .header-img {
  width: 100%;
  height: 65px;
  background-color: #9799BA;
  background-image:
    linear-gradient(
      #9799BA, #b5a1c7
    );
  background-size: cover;
  padding: 0rem;
}
button {
  align-content: center   ;
  max-height: 28px;
  transition-duration: 1.4s;
}
button:hover {
  background-image:
    linear-gradient(
      #c59734, #e5e772
    );
  color: whitesmoke;
  margin: 10px;
}
.btn {
  margin-left: 10px;
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
