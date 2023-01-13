<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton;

      if (window.scrollY > 0) {
        scrollBtn.classList.remove("invisible");
      } else {
        scrollBtn.classList.add("invisible");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>

<template>
  <div
    ref="scrollTopButton"
    class="invisible fixed z-50 flex justify-end bottom-7 right-7 transition"
  >
    <button
      class="scroll-top bg-gray-800 text-white rounded-full p-3 focus:outline-none focus:ring focus:ring-psybeam/80"
      @click="scrollToTop"
      role="button"
      aria-label="scroll to top of the page"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </div>
</template>
