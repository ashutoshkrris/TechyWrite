<template>
  <Layout>
    <!-- Scroll to top button -->
    <ScrollToTop />
    <section class="max-w-6xl p-4 mx-auto">
      <!-- Header -->
      <Header />
      <div class="mb-4 px-4 sm:px-6 lg:px-8">
        <div class="flex">
          <div class="w-2/3 text-left">
            <h2 class="flex text-2xl text-white font-semibold mr-4 py-0.5">
              Suggest a Source
            </h2>
          </div>
          <div class="w-1/3 text-right">
            <a href="/"
              ><button
                type="button"
                class="bg-green-800 text-white rounded p-2 focus:outline-none focus:ring focus:ring-psybeam/80 hover:bg-green-900 text-sm mt-3"
              >
                Home
              </button></a
            >
          </div>
        </div>
        <p class="text-gray-400 text-sm mb-6 mt-3">
          You can also use this form to request an update to an existing
          resource.
        </p>
      </div>

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
      },
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
