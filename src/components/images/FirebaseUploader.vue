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
            <div v-for="i in images" :key="i.id">
              <!-- <p>{{ i.id }}</p> -->
              <b-col>
                <div class="img-hover">
                  <b-img thumbnail fluid :src="i.src"></b-img>
                  <div class="overlay">
                    <b-iconstack font-scale="5" v-on:click="deleteImage(i.id)">
                      <b-icon stacked icon="camera" variant="info" scale="0.75"></b-icon>
                      <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
                    </b-iconstack>
                  </div>
                </div>
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
      tempImgId: 0,
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
    deleteImage(id) {
      console.log(id);
      const path = `${(process.env.VUE_APP_API_URL)}images/${id}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      axios.delete(path, {}, headers)
        .then(() => {
          for (let i = 0; i < this.images.length; i += 1) {
            if (this.images[i].id === id) {
              this.images.splice(i, 1);
              break;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUserImages(userId) {
      const path = `${(process.env.VUE_APP_API_URL)}get_user_images/${userId}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      axios.get(path, {}, headers)
        .then((res) => {
          for (let i = 0; i < res.data.length; i += 1) {
            this.images.push({ src: res.data[i].url, id: res.data[i].id });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
        this.logUrlBody.url = this.downloadReference(downloadUrl);
        this.logUrlBody.user_id = localStorage.getItem('user_id');
        this.images.push({ src: downloadUrl, id: this.logUrl() });
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
          this.tempImgId = res.data.id;
          return res.data.id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getUserImages(localStorage.getItem('user_id'));
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
  .overlay {
  text-align: center;
  position: absolute;
  top: 30%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
}

.img-hover:hover .overlay {
  opacity: 1;
}

</style>
