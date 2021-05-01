<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div class="container mt-5">
      <h1 class="title">Create profile:</h1>
      <Profileform/>
      <FirebaseUploader/>
      <button type="button" class="block">Register your house!</button>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Profileform from './profile/Profileform.vue';
import FirebaseUploader from './images/FirebaseUploader.vue';

export default {
  components: {
    Navbar,
    Profileform,
    FirebaseUploader,
  },
  data() {
  },
};
</script>

<style scoped>
  .title {
    font-family: 'Courier New', Courier, monospace;
    margin-left: 13px;
    margin-top: 20px;
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
