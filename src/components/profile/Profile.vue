<template>
<div>
    <div class="row" min-height="120px">
        <div class="col-3">
          <!-- if user has images -->
          <div v-if="userImgsUrls[0]">
          <img class="logo-placeholder" v-bind:src="userImgsUrls[0]" alt="">
          </div>
          <!-- else load placeholder image -->
          <div v-else>
            <img class="logo-placeholder" src="https://media.istockphoto.com/vectors/set-of-houses-front-view-vector-id1142049408?k=6&m=1142049408&s=612x612&w=0&h=RzKV2I3mUnddF6rPIJBuXjCNW9ozoUVD5GVQ2AEemFc=" alt="">
          </div>
        </div>
        <div class="col-8 ml-5">
            <h4>{{ profileData.title }}</h4>
            <div class="row">
              <div class="col"><p><b>City: <br>{{ profileData.city }}</b></p></div>
              <div class="col"><p><b>Rooms: <br>{{ profileData.rooms }}</b></p></div>
              <div class="col"><p><b>Beds: <br>{{ profileData.sleepingplaces }}</b></p></div>
            </div>
            <hr>
            <p>{{ profileData.description }}</p>
        </div>
    </div>
    <hr>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['user'],
  data() {
    return {
      test: 'test123',
      userId: this.user,
      userImgsUrls: [],
      profileData: {},
    };
  },
  methods: {
    getProfileImages(userId) {
      const path = `${(process.env.VUE_APP_API_URL)}get_user_images/${userId}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      axios.get(path, {}, headers)
        .then((res) => {
          for (let i = 0; i < res.data.length; i += 1) {
            this.userImgsUrls.push(res.data[i].url);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProfileData(userId) {
      const path = `${(process.env.VUE_APP_API_URL)}get_user_profile/${userId}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      axios.get(path, {}, headers)
        .then((res) => {
          const resData = res.data[0];
          this.profileData = resData;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProfileImages(this.userId);
    this.getProfileData(this.userId);
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
  max-height: 200px;
  margin-right: 100px;
  border-radius: 10px;
}
p {
  font-family: 'Courier New', Courier, monospace;
}
</style>
