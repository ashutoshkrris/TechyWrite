<template>
  <div>
    <section class="flex flex-wrap justify-center gap-4 mb-5">
      <img
        src="../assets/logo.png"
        class="object-cover rounded-full p-4 app-logo"
        alt="logo"
      />
    </section>
    <a
      class="github-corner"
      href="https://github.com/ashutoshkrris/TechyWrite"
      target="_blank"
      rel="noopener"
    >
      <img class="absolute top-0 right-0" :src="GitHubSVG" alt="Github SVG" />
    </a>

    <!-- To be displayed on New Source page -->
    <div
      v-if="this.$route.path !== '/'"
      class="mb-4 px-4 sm:px-6 lg:px-8"
    >
      <div class="flex">
        <div class="w-2/3 text-left">
          <h2 v-if="this.$route.path === '/new-source'" class="flex text-2xl text-white font-semibold mr-4 py-0.5">
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
      <p v-if="this.$route.path === '/new-source'" class="text-gray-400 text-sm mb-6 mt-3">
        You can also use this form to request an update to an existing resource.
      </p>
    </div>

    <!-- To be displayed on index -->
    <div v-else-if="this.$route.path === '/'" class="flex pl-4 pr-4 mb-4">
      <div class="w-1/2 text-left text-white mt-1">
        Displaying
        <span class="bg-green-100 text-black px-2 rounded ml-1 mr-1">{{
          totalCount
        }}</span>
        <span v-if="totalCount > 1"> opportunities</span
        ><span v-else> opportunity</span>
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
  </div>
</template>

<script>
import GitHubSVG from "../assets/githubsvg.svg";
export default {
  name: "Header",
  data() {
    return {
      GitHubSVG,
    };
  },
  props: {
    totalCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>
