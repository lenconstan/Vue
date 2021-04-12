<template>
<div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab"
      v-b-toggle.accordion-1 variant="info">
       <p class="ml-1 mt-1 mb-1"><b>{{ title }}</b></p>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="1"
                small
              ></b-table>

              <b-pagination
                @change="updateTable($event)"
                v-model="page"
                :total-rows="total"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>

              <p class="mt-3">Current Page: {{ page }}</p>
              <p>Total number of entries: {{ total }}</p>

            </div>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
</div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['title', 'data'],
  data() {
    return {
      page: 1,
      totalPages: 0,
      items: [
      ],
      perPage: 0,
      total: 0,
    };
  },
  methods: {
    updateTable(event) {
      this.page = event;
      this.getProducts(event);
    },
    getProducts(page) {
      const headers = {
        headers: {
          Authorization: localStorage.getItem('authorizationHeader'),
        },
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
  },
  created() {
    this.getProducts(1);
  },
};
</script>
