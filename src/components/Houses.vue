<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div class="container">
      <table>
        <div :v-if="userData">
          <div v-bind="userData">
            <div v-for="user in userData" v-bind:key="user.user_id">
              <Profile :user="user.user_id"/>
            </div>
          </div>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue';
import Profile from './profile/Profile.vue';

export default {
  components: {
    Navbar,
    Profile,
  },
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    getProfiles() {
      const path = `${(process.env.VUE_APP_API_URL)}get_profiles`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      axios.get(path, {}, headers)
        .then((res) => {
          for (let i = 0; i < res.data.length; i += 1) {
            this.userData.push(res.data[i]);
          }
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProfiles();
    console.log(this.userData);
  },
};
</script>

<style scoped>
  table {
    margin-top: 30px;
  }
</style>
