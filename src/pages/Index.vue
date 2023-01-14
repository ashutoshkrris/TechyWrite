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

      <div class="flex pl-4 pr-4">
        <div class="w-1/2 text-left text-white ">
          Displaying
          <span class="bg-green-100 text-black px-2 rounded ml-2 mr-2">{{
            $page.opportunities.totalCount
          }}</span>
          Opportunities
        </div>
        <div class="w-1/2 text-right">
          <a href="/new-source"
            ><button
              type="button"
              class="bg-green-800 text-white rounded p-2 focus:outline-none focus:ring focus:ring-psybeam/80 hover:bg-green-900 text-sm"
            >
              Suggest a Source
            </button></a
          >
        </div>
      </div>

      <!-- Opportunities -->
      <ul class="gap-4 mx-auto mb-2">
        <li
          v-for="opportunity in $page.opportunities.edges"
          :key="opportunity.node.id"
          class="p-3 w-full h-full"
        >
          <Opportunity :opportunity="opportunity" />
        </li>
      </ul>

      <!-- Pager -->
      <div class="pagination-container">
        <Pager
          :info="$page.opportunities.pageInfo"
          class="pagination"
          :linkClass="'page-link'"
          :exactActiveLinkClass="'active-page'"
          :range="3"
        />
      </div>

      <!-- Footer -->
      <Footer />
    </section>
  </Layout>
</template>

<script>
import Opportunity from "../components/Opportunity.vue";
import { Pager } from "gridsome";
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
  components: {
    Pager,
  },
};
</script>

<page-query>
query ($page: Int) {
  opportunities: allOpportunities(sortBy: "name", order: ASC, perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        name
        type
        link
        categories
        minRate
        maxRate
        description
        contact
        royaltyRate
        hourlyMinRate
        hourlyMaxRate
      }
    }
    totalCount
  }
}
</page-query>
