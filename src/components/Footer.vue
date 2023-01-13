<script setup>
import Contributors from "../components/Contributors.vue";
</script>

<template>
  <footer>
    <div class="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-8">
      <!-- Mention contributors -->
      <Contributors />

      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-center space-x-6 md:order-2">
          <a
            href="https://twitter.com/ashutoshkrris"
            class="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener"
          >
            <span class="sr-only">Twitter</span>
            <img class="w-[30px]" :src="Twitter" alt="Twitter logo" />
          </a>

          <a
            href="https://github.com/ashutoshkrris"
            class="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener"
          >
            <span class="sr-only">GitHub</span>
            <img :src="GitHub" alt="github" />
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-sm text-center text-gray-400">
            &copy; 2022 - {{ new Date().getFullYear() }}, Built with ❤️ by
            <a href="https://ashutoshkrris.in">Ashutosh Krishna</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";

export default {
  name: "Footer",
  data() {
    return {
      Twitter: Twitter,
      GitHub: Github,
    };
  },
};
</script>
