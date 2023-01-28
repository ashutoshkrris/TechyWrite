<template>
  <Layout>
    <!-- Scroll to top button -->
    <ScrollToTop />
    <section class="max-w-6xl p-4 mx-auto">
      <!-- Header -->
      <Header />

      <div class="p-4">
        <p class="text-gray-400 text-justify">
          Welcome to our website, where you will find a curated collection of
          active publishers, publications, and agencies that pay fair rates for
          high-quality technical content. You might have heard the quote by
          <span class="text-white">The Joker - Heath Ledger</span>:
          <span class="text-white"
            >If you're good at something, never do it for free</span
          >.
          <br />
          As a technical writer, I understand the value and hard work that goes
          into creating exceptional technical content. That's why I've created
          this website to help fellow technical writers find paid opportunities
          in the market.
          <br />
          My goal is to make it easy for writers to find publishers,
          publications, and agencies that recognize the value of their work and
          are willing to pay fair rates for it. I've done the research and
          compiled a comprehensive list of reputable companies that are actively
          looking for technical writers.
          <br />
          I hope that this website helps you find the perfect gig or connect
          with awesome writers. If it does, I'd appreciate a few dollars towards
          my hard work in creating and maintaining this resource.
          <iframe
            src="https://github.com/sponsors/ashutoshkrris/button"
            title="Sponsor ashutoshkrris"
            height="35"
            width="116"
            style="border: 0;"
            class="mt-4"
          ></iframe>
          <br />
          Thank you for visiting and I wish you all the best in your technical
          writing endeavors!
        </p>
      </div>

      <!-- Footer -->
      <Footer />
    </section>
  </Layout>
</template>

<script>
import ScrollToTop from "../components/ScrollToTop.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  metaInfo: {
    title: "About",
    meta: [
      {
        property: "og:url",
        content: "https://techywrite.ashutoshkrris.in/about",
      },
      { property: "og:title", content: "About - TechyWrite" },
      {
        property: "twitter:title",
        content: "About - TechyWrite",
      },
      {
        property: "twitter:url",
        content: "https://techywrite.ashutoshkrris.in/about",
      },
    ],
  },
  components: {
    ScrollToTop,
    Header,
    Footer,
  },
};
</script>
