<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm pr-sm-0">
        <input type="text" name="title" id="title" v-model="houseData.title"
        placeholder="Short description" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm pr-sm-0">
        <input type="text" name="location" id="location" v-model="houseData.address"
        placeholder="Address" class="form-control">
      </div>
      <div class="col-6 col-sm pr-sm-0">
        <input type="text" name="city" id="city" v-model="houseData.city"
        placeholder="City" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-sm pr-sm-0">
        <form>
          <select name="rooms" class="form-control" v-model="houseData.rooms">
            <option selected v-if="houseData.rooms">{{ houseData.rooms }}</option>
            <option disabled>Number of rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>
      </div>
      <div class="col-6 col-sm pr-sm-0">
        <form>
          <select name="sleepingplaces" class="form-control" v-model="houseData.sleepingplaces">
            <option selected v-if="houseData.sleepingplaces">{{ houseData.sleepingplaces }}</option>
            <option disabled>Number of beds</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm pr-sm-0 mt-3 mb-3">
        <textarea class="form-control" rows="5"
        id="comment" placeholder="Detailed description"
        v-model="houseData.description"></textarea>
      </div>
    </div>
    <FirebaseUploader/>
    <button v-if="hasProfile" type="button" v-on:click="updateProfile(houseData)"
    class="block">Update profile!</button>
    <button v-else type="button" v-on:click="updateProfile(houseData)"
    class="block">Register your house!</button>
  </div>
</template>

<script>
import axios from 'axios';
import FirebaseUploader from '../images/FirebaseUploader.vue';

export default {
  components: {
    FirebaseUploader,
  },
  data() {
    return {
      hasProfile: false,
      houseData: {
        user_id: localStorage.getItem('user_id'),
        title: '',
        address: '',
        city: '',
        rooms: '',
        sleepingplaces: '',
        description: '',
      },
    };
  },
  methods: {
    getProfileData(userId) {
      const path = `${(process.env.VUE_APP_API_URL)}get_user_profile/${userId}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      axios.get(path, {}, headers)
        .then((res) => {
          // bool to indicates whether user has profile
          if (res.data.length > 0) {
            // this.houseData = res.data;
            const resData = res.data[0];
            this.houseData = resData;
            console.log(this.houseData);
            this.hasProfile = true;
          }
        })
        .catch((error) => {
          console.log(error);
          return false;
        });
    },
    postProfile(payload) {
      console.log(`user id is ${this.houseData.user_id}`);
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      const path = `${(process.env.VUE_APP_API_URL)}set_profile`;
      console.log(payload);
      axios.post(path, payload, headers)
        .then(() => {
          this.makeToast('Profile submitted');
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.makeDangerToast('Gegevens incompleet');
        });
    },
    updateProfile(payload) {
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      const path = `${(process.env.VUE_APP_API_URL)}update_user_profile/${localStorage.getItem('user_id')}`;
      axios.post(path, payload, headers)
        .then(() => {
          this.makeToast('Profile updated');
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.makeDangerToast('Sum tin wong!');
        });
    },
    submitProfile(bool) {
      if (bool === false) {
        console.log(`hasprofile ${bool}`);
        this.postProfile(this.houseData);
        console.log(`Profile submitted for user with ID: ${this.houseData.user_id}`);
        this.hasProfile = true;
      } else {
        console.log(`hasprofile ${bool}`);
        console.log(`user-id: ${this.houseData.user_id}`);
        this.updateProfile(this.houseData);
        console.log(`Profile updated for user with ID: ${this.houseData.user_id}`);
      }
    },
    makeToast(text) {
      this.$toasted.show(text, {
        duration: 2000,
        position: 'top-center',
        type: 'success',
        theme: 'bubble',
      });
    },
    makeDangerToast(text) {
      this.$toasted.show(text, {
        duration: 2000,
        position: 'top-center',
        type: 'error',
        theme: 'bubble',
      });
    },
  },
  created() {
    // check if user has profile
    this.getProfileData(this.houseData.user_id);
    console.log(this.houseData.user_id);
    console.log(this.hasProfile);
  },
};
</script>

<style scoped>
  .form-control {
  font-family: 'Courier New', Courier, monospace;
  outline: 0;
  border-width: 0 0 2px;
  border-color: rgba(102, 102, 102, 0.404);
  border-radius: 0%;
  }
  .form-control:focus {
  border-color:#D291BC;
  -webkit-box-shadow: none;
  box-shadow: none;
}
  .block {
  font-family: 'Courier New', Courier, monospace;
  color: whitesmoke;
  background-color: #9799BA;
  background-image:
    linear-gradient(
      #9799BA, #b5a1c7
    );
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
.block:hover {
  background-image:
    linear-gradient(
      #c59734, #e5e772
    );
}

</style>
