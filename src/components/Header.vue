<template>
  <div>
    <section class="flex flex-wrap justify-center gap-4 mb-5">
      <img
        src="../assets/logo.png"
        class="object-cover rounded-full p-4"
        style="width: 60%"
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
};
</script>
