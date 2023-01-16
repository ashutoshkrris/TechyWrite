<template>
  <Layout>
    <!-- Scroll to top button -->
    <ScrollToTop />
    <section class="max-w-6xl p-4 mx-auto">
      <!-- Header -->
      <Header />

      <!-- Contributors -->
      <Contributors />

      <!-- Footer -->
      <Footer />
    </section>
  </Layout>
</template>

<script>
import ScrollToTop from "../components/ScrollToTop.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Contributors from "../components/Contributors.vue";
export default {
  metaInfo: {
    title: "Contributors",
    meta: [
      {
        property: "og:url",
        content: "https://techywrite.vercel.app/contributors",
      },
      { property: "og:title", content: "Contributors - TechyWrite" },
      {
        property: "twitter:title",
        content: "Contributors - TechyWrite",
      },
      {
        property: "twitter:url",
        content: "https://techywrite.vercel.app/contributors",
      },
    ],
  },
  components: {
    ScrollToTop,
    Header,
    Footer,
    Contributors,
  },
};
</script>
