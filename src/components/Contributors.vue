<template>
  <div
    class="text-center border-2 border-gray-500 rounded-xl px-2 md:px-6 py-4 space-y-6"
  >
    <p class="text-gray-200 text-lg font-medium">Our Contributors</p>
    <ul class="flex flex-wrap items-center justify-center">
      <li v-for="contributor in contributors" :key="contributor.id">
        <div class="flex flex-col items-center px-2 md:px-6 py-4">
          <img
            :src="contributor.avatar_url"
            :alt="contributor.login"
            class="rounded-full w-8 h-8"
          />

          <div class="flex flex-col items-center space-y-1">
            <a
              :href="contributor.html_url"
              target="_blank"
              rel="noopener"
              class="text-psybeam hover:text-psybeam/80"
            >
              {{ contributor.login }}
            </a>
            <span class="text-gray-200 bg-gray-800 text-sm rounded-full px-2">
              {{ contributor.contributions }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contributors",
  data() {
    return {
      contributors: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        "https://api.github.com/repos/ashutoshkrris/TechyWrite/contributors"
      );
      const data = await response.json();
      this.contributors = data;
    } catch (err) {
      console.error(err.message);
    }
  },
};
</script>
