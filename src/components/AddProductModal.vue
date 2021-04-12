<template>
  <b-modal id="add-product-modal" title="Add product"
  @ok="handleOk"
  @hide="handleCancel">
    <p class="my-4">Fill in the product data</p>
      <div class="row ml-3 mb-1">
        <!-- Name -->
        <label><code>Product Name</code> : </label>
        <input type="text" class="input ml-3" v-model="addProductForm.name">
      </div>
      <div class="row ml-3 mb-1">
        <!-- description -->
        <label><code>Product Description</code> : </label>
        <input type="text" class="input ml-3" v-model="addProductForm.description">
      </div>
      <div class="row ml-3 mb-1">
        <!-- Slug -->
        <label><code>Product Slug</code> : </label>
        <input type="text" class="input ml-3" v-model="addProductForm.slug">
      </div>
      <div class="row ml-3 mb-1">
        <!-- Product Price -->
        <label><code>Product Price</code> : </label>
        <input type="number" class="input ml-3" v-model="addProductForm.price">
      </div>
  </b-modal>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddProductModal',
  data() {
    return {
      addProductForm: {
        name: '',
        description: '',
        slug: '',
        price: '',
      },
    };
  },
  methods: {
    addProduct(payload) {
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      const path = 'http://localhost:8000/api/products';
      axios.post(path, payload, headers)
        .then(() => {
          this.getProducts();
          this.makeToast('Product added!');
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.makeDangerToast('Gegevens incompleet');
          this.getProducts();
        });
    },
    resetModal() {
      this.initForm();
    },
    handleOk() {
      this.checkRequired(this.name, this.description, this.slug);
      this.addProduct(this.addProductForm);
    },
    handleCancel() {
      this.initForm();
    },
    getProducts(page) {
      const headers = {
        Authorization: localStorage.getItem('authorizationHeader'),
      };
      const path = `http://localhost:8000/api/paginatedproducts?page=${page}`;
      axios.get(path, {}, headers)
        .then((response) => {
          this.page = response.data.current_page;
          this.totalPages = response.data.last_page;
          this.items = response.data.data;
          this.perPage = response.data.per_page;
          this.total = response.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkRequired(...args) {
      for (let i = 0; i < args.length; i += 1) {
        if (args[i] === '') {
          this.makeDangerToast('Niet ale verplichte velden zijn ingevuld!');
          break;
        }
      }
      return true;
    },
    initForm() {
      this.addProductForm.name = '';
      this.addProductForm.description = '';
      this.addProductForm.slug = '';
      this.addProductForm.price = '';
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
