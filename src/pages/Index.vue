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
      <Header :totalCount="opportunitiesData.length" />

      <div class="flex md:flex-row flex-col px-1.5 py-4">
        <!-- Filtering -->
        <div class="w-full md:w-1/4 px-2 py-1">
          <div class="flex rounded-md shadow-sm">
            <span
              class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-800 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
              >Type</span
            >
            <select
              v-model="selectedCompanyType"
              class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-gray-800 text-gray-300"
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
              class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-800 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
              >Sort By</span
            >
            <select
              v-model="selectedSorting"
              class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-gray-800 text-gray-300"
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
            class="px-4 py-2 bg-gray-800 text-gray-300 outline-none rounded-md w-full focus:ring focus:ring-psybeam/80 -mr-[4.5rem] md:pr-[5.5rem]"
            id="search-bar"
            type="search"
            placeholder="Search by name or category"
            v-model="searchTerm"
            @input="setPageNumber(1)"
            required
          />
          <span
            class="z-10 text-gray-500 border border-gray-500 shrink-0 text-xs px-2 mr-4 py-1 rounded-lg select-none hidden md:block"
          >
            Ctrl + /
          </span>
        </div>
      </div>

      <!-- Opportunities -->
      <ul class="gap-4 mx-auto mb-2">
        <li
          v-for="opportunity in opportunitiesData.slice(
            (page - 1) * pageSize,
            page * pageSize
          )"
          :key="opportunity.name"
          class="p-3 w-full h-full"
        >
          <Opportunity :opportunity="opportunity" />
        </li>
      </ul>

      <!-- Shown only if no results found -->
      <div v-if="opportunitiesData.length == 0" class="py-6 space-y-20">
        <NoResultsFound :searchTerm="this.searchTerm" />
      </div>

      <!-- Pagination -->
      <Pagination
        :opportunities="opportunitiesData"
        @pageNumber="setPageNumber"
        v-if="opportunitiesData.length > pageSize"
      />

      <!-- Footer -->
      <Footer />
    </section>
  </Layout>
</template>

<script>
import Opportunity from "../components/Opportunity.vue";
import opportunities from "@/data/opportunities.json";
import Pagination from "../components/Pagination.vue";
import NoResultsFound from "../components/NoResultsFound.vue";
export default {
  metaInfo: {
    title: "Home",
    meta: [
      {
        property: "og:url",
        content: "https://techywrite.ashutoshkrris.in",
      },
      { property: "og:title", content: "Home - TechyWrite" },
      {
        property: "twitter:title",
        content: "Home - TechyWrite",
      },
      {
        property: "twitter:url",
        content: "https://techywrite.ashutoshkrris.in",
      },
    ],
  },
  data() {
    return {
      opportunities: opportunities,
      selectedCompanyType: "All Resources",
      companyTypes: ["All Resources", "Publication", "Publisher", "Agency"],
      selectedSorting: "A-Z",
      sortings: ["A-Z", "Z-A", "Rate (low to high)", "Rate (high to low)"],
      page: 1,
      pageSize: 10,
      searchTerm: "",
    };
  },
  mounted() {
    // Focus on search bar
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "/") {
        document.querySelector("#search-bar").focus();
      }
    });
  },
  methods: {
    setPageNumber(value) {
      this.page = value;
    },
  },
  computed: {
    opportunitiesData() {
      let filtered = this.opportunities;

      // Apply filters
      if (this.selectedCompanyType !== "All Resources")
        filtered = filtered.filter(
          (opportunity) =>
            opportunity.type.toLowerCase() ===
            this.selectedCompanyType.toLowerCase()
        );

      // Apply sorting
      switch (this.selectedSorting) {
        case "A-Z":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Z-A":
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "Rate (low to high)":
          filtered.sort((a, b) =>
            (a.maxRate || a.hourlyMaxRate) > (b.maxRate || b.hourlyMaxRate)
              ? 1
              : -1
          );
          break;
        case "Rate (high to low)":
          filtered.sort((a, b) =>
            (a.maxRate || a.hourlyMaxRate) < (b.maxRate || b.hourlyMaxRate)
              ? 1
              : -1
          );
          break;
        default:
          break;
      }

      // Apply search
      if (this.searchTerm)
        filtered = filtered.filter(
          (opportunity) =>
            opportunity.name
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            opportunity.categories.some((category) =>
              category.toLowerCase().includes(this.searchTerm.toLowerCase())
            )
        );

      return filtered;
    },
  },
};
</script>
