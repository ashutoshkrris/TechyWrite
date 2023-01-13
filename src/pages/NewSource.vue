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
  },
  components: {
    ScrollToTop,
    Header,
    Footer,
    NewSourceForm,
  },
};
</script>
