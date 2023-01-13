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

      <!-- Footer -->
      <Footer />
    </section>
  </Layout>
</template>

<script>
import Opportunity from "../components/Opportunity.vue";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<page-query>
query {
  opportunities: allOpportunities(sortBy: "name", order: ASC) {
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
