<template>
    <div>
    <div class="header-img">
    <b-navbar toggleable="lg" type="dark" variant="dark bg-transparent" fixed="fixed-top">
        <b-navbar-brand href="/pong">CasaC</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/">Books</b-nav-item>
            <b-nav-item href="/usermanagement">Usermanagement</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <Logout/>
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
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
  .header-img {
  width: 100%;
  height: 150px;
  background: url('http://ondinas.com.br/site/wp-content/themes/options/images/skins/headers/full_width/header-purpleHaze.jpg');
  background-size: cover;
  padding: 0rem;
}

</style>
