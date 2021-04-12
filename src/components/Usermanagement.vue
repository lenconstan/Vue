<template>
    <div>
    <Navbar/>
        <b-container fluid="md">
        <div class="jumbotron" style="background:transparent !important">
          <div class="row mb-2">
            <h3 class="ml-3">Productmanagement</h3>
            <b-button class="ml-4" href="#" v-b-modal.add-product-modal>Add Product</b-button>
          </div>
          <content-bar title="Stan" data="lorem ipsum"/>
        </div>
        </b-container>
        <AddProductModal/>
    </div>
</template>

<script>
// import axios from 'axios';
import Navbar from './Navbar.vue';
import ContentBar from './ContentBar.vue';
import AddProductModal from './AddProductModal.vue';

export default {
  components: { Navbar, ContentBar, AddProductModal },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
    .b-button {
    margin-left: 10mm;
    }
</style>
