<template>
  <b-modal id="add-product-modal" title="Add product"
  @ok="handleOk"
  @hide="handleCancel">
    <p class="my-4">Fill in the <code>ID</code> of the product that needs to be deleted.</p>
      <div class="row ml-3 mb-1">
        <!-- Name -->
        <label><code>Product ID</code> : </label>
        <input type="text" class="input ml-3" v-model="deleteProductForm.id">
      </div>
  </b-modal>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DeleteProductModal',
  data() {
    return {
      deleteProductForm: {
        id: '',
      },
    };
  },
  methods: {
    deleteProduct(id) {
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
      };
      const path = `http://localhost:8000/api/products${id}`;
      axios.delete(path, headers)
        .then(() => {
          this.getProducts();
          this.makeToast('Product deleted!');
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.getProducts();
        });
    },
    resetModal() {
      this.initForm();
    },
    handleOk() {
      this.addProduct(this.addProductForm);
    },
    handleCancel() {
      console.log('hide');
    },
    getProducts(page) {
      const headers = {
        Authorization: localStorage.getItem('authorizationHeader'),
      };
      const path = `http://localhost:8000/api/paginatedproducts?page=${page}`;
      axios.get(path, {}, headers)
        .then((response) => {
          this.id = '',
        })
        .catch((error) => {
          console.log(error);
        });
    },
    makeToast(text) {
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