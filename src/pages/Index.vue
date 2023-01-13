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
      { property: "og:title", content: "Guest Writings 📝 - Ashutosh Krishna" },
      {
        property: "twitter:title",
        content: "Guest Writings 📝 - Ashutosh Krishna",
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
        hourlyMaxRate
      }
    }
    totalCount
  }
}
</page-query>
