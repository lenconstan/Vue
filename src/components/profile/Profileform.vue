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
        <input type="text" name="location" id="location" v-model="houseData.location"
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
          <select name="cars" class="form-control">
            <option selected>Number of rooms</option>
            <option value="volvo">1</option>
            <option value="fiat">2</option>
            <option value="audi">3</option>
          </select>
        </form>
      </div>
      <div class="col-6 col-sm pr-sm-0">
        <b-form-spinbutton id="sleeping-places" v-model="sleepingPlaces"
        min="1" max="15" placeholder="No. of beds"></b-form-spinbutton>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm pr-sm-0 mt-3 mb-3">
        <textarea class="form-control" rows="5"
        id="comment" placeholder="Detailed decription"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      houseData: {
        title: '',
        location: '',
        city: '',
        rooms: '',
        sleepingPlaces: '',
      },
    };
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
