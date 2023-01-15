<template>
  <div class="pagination-container">
    <ul v-if="totalPages >= 1" class="pagination">
      <li
        class="page-item"
        aria-label="go to previous page"
        @click="prevPage"
        v-if="this.page > 1"
      >
        <span class="page-link">&laquo;</span>
      </li>
      <li
        v-for="p in pages"
        :key="p"
        @click="gotoPage(p)"
        :aria-label="'go to page ' + p"
        class="page-item"
      >
        <div
          class="page-link"
          :class="{
            'active-page': page === p,
          }"
        >
          {{ p }}
        </div>
      </li>
      <li
        class="page-item"
        v-if="this.page < totalPages"
        aria-label="go to next page"
        @click="nextPage"
      >
        <div class="page-link">&raquo;</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    opportunities: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      page: 1,
      pageSize: 10,
      pages: [1],
    };
  },
  created() {
    this.updatePages(); // Update pages when component is created
  },
  computed: {
    totalPages() {
      return Math.ceil(this.opportunities.length / this.pageSize);
    },
  },
  watch: {
    opportunities() {
      this.updatePages(); // Update pages when opportunities change
      if (this.page > this.totalPages) {
        this.page = 1;
      }
    },
  },
  methods: {
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.updatePages();
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
        this.updatePages();
      }
    },
    gotoPage(p) {
      this.page = p;
      this.updatePages();
    },
    updatePages() {
      this.pages = [];
      // Add page numbers before current page
      for (let i = this.page - 2; i < this.page; i++) {
        if (i > 0) {
          this.pages.push(i);
        }
      }
      // Add current page
      this.pages.push(this.page);
      // Add page numbers after current page
      for (let i = this.page + 1; i < this.page + 3; i++) {
        if (i <= this.totalPages) {
          this.pages.push(i);
        }
      }
      // Add remaining page numbers if necessary
      while (this.pages.length < 5) {
        if (this.pages[0] > 1) {
          // Add page numbers before current page if possible
          this.pages.unshift(this.pages[0] - 1);
        } else if (this.pages[this.pages.length - 1] < this.totalPages) {
          // Add page numbers after current page if possible
          this.pages.push(this.pages[this.pages.length - 1] + 1);
        } else {
          // All possible page numbers have been added
          break;
        }
      }

      // Emit page number for use in Index.vue
      this.$emit("pageNumber", this.page);
    },
  },
};
</script>
