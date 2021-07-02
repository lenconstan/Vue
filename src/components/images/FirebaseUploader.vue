<template>
    <div>
      <vue-dropzone class='dropzone' ref='imgDropzone'
      id="imgDropzone"
      :options='dropzoneOptions'
      @vdropzone-complete="afterComplete"
      :useCustomSlot=true>
        <div class="dropzone-custom-content">
          <h3 class="dropzone-custom-title">Drag and drop pictures of your house!</h3>
          <div class="subtitle">...or click to select a file from your computer</div>
        </div>
      </vue-dropzone>
      <div v-if="images.length > 0">
        <b-container fluid class="p-4">
          <b-row>
            <div v-for="image in images" :key="image.src">
              <b-col>
                <b-img thumbnail fluid :src="image.src"></b-img>
              </b-col>
            </div>
          </b-row>
        </b-container>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase';
import vue2Dropzone from 'vue2-dropzone'; //eslint-disable-line
import 'vue2-dropzone/dist/vue2Dropzone.min.css'; //eslint-disable-line

const uuid = require('uuid');

export default {
  name: 'App',
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      images: [],
      dropzoneOptions: {
        url: 'https://vuejs-25790.appspot.com',
        thumbnailWith: 250,
        thumbnailHeight: 250,
        duplicateCheck: true,
        addRemoveLinks: false,
        acceptedFiles: '.jpg, .jpeg, .png',
      },
      logUrlBody: {
        url: '',
        user_id: '',
      },
    };
  },
  methods: {
    downloadReference(ref) {
      const str = ref;
      const pos = str.indexOf('?alt=media&token');
      const end = str.substr(pos); // end part
      let front = str.substr(0, pos); //  front part
      const newFront = front.lastIndexOf('.');
      front = `${front.substr(0, newFront)}_800x800.jpeg${end}`;
      return front;
    },
    async afterComplete(file) {
      try {
        const imageName = uuid.v1();
        const metaData = {
          contentType: 'image/png',
        };
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`images/${imageName}.png`);
        await imageRef.put(file, metaData);
        const downloadUrl = await imageRef.getDownloadURL();
        this.images.push({ src: downloadUrl });
        this.logUrlBody.url = this.downloadReference(downloadUrl);
        console.log(this.logUrlBody);
        this.logUrlBody.user_id = localStorage.getItem('user_id');
        this.logUrl();
        this.$refs.imgDropzone.removeFile(file);
      } catch (error) {
        console.log(error);
      }
    },
    logUrl() {
      const path = `${(process.env.VUE_APP_API_URL)}firebaseurl`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      axios.post(path, this.logUrlBody, headers)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
  .dropzone {
    border-radius: 20px;
    background-color: #e1f7d5;
  }
  .dropzone-custom-title {
    font-family: 'Courier New', Courier, monospace;
  }
  .subtitle {
    font-family: 'Courier New', Courier, monospace;
  }
  .img-div {
    display: flex;
    margin: 10px;
  }
  img {
    max-width: 200px;
    margin: 5px;
  }
</style>
