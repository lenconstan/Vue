<template>
  <div class="container">
    <div>
      <Profileform/>
    </div>
    <div>
      <FirebaseUploader/>
    </div>
    <p>test123</p>
  </div>
</template>

<script>
// import axios from 'axios';
import FirebaseUploader from './images/FirebaseUploader.vue';
import Profileform from './profile/Profileform.vue';

export default {
  components: { FirebaseUploader, Profileform },
  name: 'Ping',
  data() {
    return {
      msg: '',
    };
  },
  methods: {},
};
</script>
