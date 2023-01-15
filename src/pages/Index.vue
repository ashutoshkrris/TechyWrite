<script setup>
import ScrollToTop from "../components/ScrollToTop.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Layout>
    <!-- Scroll to top button -->
    <ScrollToTop />
    <section class="max-w-6xl p-4 mx-auto">
      <!-- Header -->
      <Header />

      <div class="flex md:flex-row flex-col px-1.5 py-4">
        <!-- Filtering -->
        <div class="w-full md:w-1/4 px-2 py-1">
          <div class="flex rounded-md shadow-sm">
            <span
              class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-200 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
              >Type</span
            >
            <select
              v-model="selectedCompanyType"
              class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
            >
              <option v-for="option in companyTypes" :value="option">{{
                option
              }}</option>
            </select>
          </div>
        </div>

        <!-- Sorting -->
        <div class="w-full md:w-1/4 px-2 py-1">
          <div class="flex rounded-md shadow-sm">
            <span
              class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-200 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
              >Sort By</span
            >
            <select
              v-model="selectedSorting"
              class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
            >
              <option v-for="option in sortings" :value="option">{{
                option
              }}</option>
            </select>
          </div>
        </div>

        <!-- Searching -->
        <div class="flex items-center w-full md:w-1/2 px-2 py-1">
          <input
            class="px-4 py-2 bg-gray-800 text-gray-300 outline-none rounded-md w-full focus:ring focus:ring-psybeam/80 -mr-[4.5rem]"
            id="search-bar"
            placeholder="Search by opportunity name or category"
            required
          />
          <span
            class="z-10 text-gray-500 border border-gray-500 shrink-0 text-xs px-2 mr-4 py-1 rounded-lg select-none"
          >
            Ctrl + /
          </span>
        </div>
      </div>

      <!-- Opportunities -->
      <ul class="gap-4 mx-auto mb-2">
        <li
          v-for="opportunity in opportunities"
          :key="opportunity.name"
          class="p-3 w-full h-full"
        >
          <Opportunity :opportunity="opportunity" />
        </li>
      </ul>

      <!-- Pager -->
      <!-- <div class="pagination-container">
        <Pager
          :info="$page.opportunities.pageInfo"
          class="pagination"
          :linkClass="'page-link'"
          :exactActiveLinkClass="'active-page'"
          :range="3"
        />
      </div> -->

      <!-- Footer -->
      <Footer />
    </section>
  </Layout>
</template>

<script>
import Opportunity from "../components/Opportunity.vue";
import opportunities from "@/data/opportunities.json";
export default {
  metaInfo: {
    title: "Home",
    meta: [
      {
        property: "og:url",
        content: "https://techywrite.vercel.app",
      },
      { property: "og:title", content: "Home - TechyWrite" },
      {
        property: "twitter:title",
        content: "Home - TechyWrite",
      },
      {
        property: "twitter:url",
        content: "https://techywrite.vercel.app",
      },
    ],
  },
  data() {
    return {
      selectedCompanyType: "All Resources",
      companyTypes: ["All Resources", "Publication", "Publisher", "Agency"],
      selectedSorting: "A-Z",
      sortings: ["A-Z", "Z-A", "Rate (low to high)", "Rate (high to low)"],
    };
  },
};

window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "/") {
    document.querySelector("#search-bar").focus();
  }
});
</script>

