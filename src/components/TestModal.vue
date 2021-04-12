<template>
    <b-modal id="test-modal" title="Randomkittygenerator">
        <b-form @reset="onReset">
          <div align="center">
            <p class="my-4">Click the button to see random kitties!!</p>
            <!-- <input type="text" id="testinput" placeholder="typ iets"> -->
            <br>
            <img :src="lol" width="300">
            <br>
            <b-button class="mt-3" type="reset">random kitty</b-button>
          </div>
        </b-form>
    </b-modal>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      lol: '',
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      //   this.lol += 10;
      //   console.log(this.lol);
      const path = 'https://aws.random.cat/meow';
      axios.get(path)
        .then((res) => {
          // console.log(res.data.file);
          this.lol = res.data.file;
        //   this.lol = res.data.books;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
};
</script>
