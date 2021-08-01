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
            <option selected>Number of rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </form>
      </div>
      <div class="col-6 col-sm pr-sm-0">
        <b-form-spinbutton id="sleeping-places" v-model="houseData.sleepingPlaces"
        min="1" max="15" placeholder="No. of beds"></b-form-spinbutton>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm pr-sm-0 mt-3 mb-3">
        <textarea class="form-control" rows="5"
        id="comment" placeholder="Detailed description"
        v-model="houseData.description"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      houseData: {
        user_id: localStorage.getItem('user_id'),
        title: '',
        address: '',
        city: '',
        rooms: '',
        sleepingPlaces: '',
        description: '',
      },
    };
  },
  methods: {
    postProfile(payload) {
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      const path = `${(process.env.VUE_APP_API_URL)}set_profile`;
      console.log(payload);
      axios.post(path, payload, headers)
        .then(() => {
          this.getProducts();
          this.makeToast('Profile submitted');
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.makeDangerToast('Gegevens incompleet');
          this.getProducts();
        });
    },
    submitProfile() {
      this.postProfile(this.houseData);
      console.log(`Profile submitted for user with ID: ${this.houseData.user_id}`);
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

</style>
