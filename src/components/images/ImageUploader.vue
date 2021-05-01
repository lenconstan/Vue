<template>
  <div>
    <input type="file" @change="onFileSelected($event)">
    <button @click="uploadImage()">Upload Image</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: '',
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]; //eslint-disable-line
      console.log(this.selectedFile);
    },
    uploadImage() {
      const path = 'gs://vuejs-25790.appspot.com';
      const headers = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data; boundary=abcde',
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('user_id', '1');
      formData.append('name', 'Stan600');
      axios.post(path, formData, headers)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data);
        });
    },
  },
};
</script>

<style scoped>

</style>
