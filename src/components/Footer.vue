<template>
  <footer
    class="p-4 mx-3 my-6 bg-gray-900 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900"
  >
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="/" class="flex items-center mb-4 sm:mb-0">
        <img
          src="https://i.imgur.com/xSOfwDU.png"
          class="h-16 mr-3"
          alt="TechyWrite Logo"
        />
      </a>
      <ul
        class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
      >
        <li>
          <a href="/about" class="mr-4 hover:underline hover:text-white md:mr-6 text-base">About</a>
        </li>
        <li>
          <a href="/new-source" class="mr-4 hover:underline hover:text-white md:mr-6 text-base"
            >Suggest a Source</a
          >
        </li>
        <li>
          <a href="/contributors" class="mr-4 hover:underline hover:text-white md:mr-6 text-base"
            >Contributors</a
          >
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 text-center sm:text-center dark:text-gray-400"
      >Inspired by, but not associated with, <a href="http://whopayswriters.com/" class="hover:underline hover:text-white">Who Pays Writers</a> and
      <a href="https://whopaystechnicalwriters.com/" class="hover:underline hover:text-white"
        >Who Pays Technical Writers</a
      >.<br />&copy; 2022 - {{ new Date().getFullYear() }}
      <a href="https://ashutoshkrris.in/" class="hover:underline hover:text-white"
        >Ashutosh Krishna</a
      >. All Rights Reserved.
    </span>
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
