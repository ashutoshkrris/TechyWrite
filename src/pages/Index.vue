<script setup>
import ScrollToTop from "../components/ScrollToTop.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <Layout>
    <ScrollToTop />
    <section class="max-w-6xl p-4 mx-auto">
      <Header />
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<page-query>
query {
  opportunities: allOpportunities {
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
