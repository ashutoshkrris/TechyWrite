<template>
  <Layout>
    <!-- Scroll to top button -->
    <ScrollToTop />
    <section class="max-w-6xl p-4 mx-auto">
      <!-- Header -->
      <Header />

      <!-- New Source Form -->

      <NewSourceForm />

      <!-- Footer -->
      <Footer />
    </section>
  </Layout>
</template>

<script>
import ScrollToTop from "../components/ScrollToTop.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import NewSourceForm from "../components/NewSourceForm.vue";
export default {
  metaInfo: {
    title: "Suggest a Source",
    meta: [
      {
        property: "og:url",
        content: "https://techywrite.vercel.app/new-source",
      },
      { property: "og:title", content: "Suggest a Source - TechyWrite" },
      {
        property: "twitter:title",
        content: "Suggest a Source - TechyWrite",
      },
      {
        property: "twitter:url",
        content: "https://techywrite.vercel.app/new-source",
      }
    ],
  },
  components: {
    ScrollToTop,
    Header,
    Footer,
    NewSourceForm,
  },
};
</script>
