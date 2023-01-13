<template>
  <div class="shadow-lg hover:shadow-xl">
    <div
      class="flex rounded-lg h-full bg-gray-800 bg-opacity-30 p-8 flex-col hover:bg-opacity-50"
      style="position: relative"
    >
      <h2
        class="flex rounded-2xl opportunity-type text-xs font-semibold mr-4 px-2.5 py-0.5 dark:bg-green-700 dark:text-green-100 rounded-lg"
      >
        {{ opportunity.node.type }}
      </h2>
      <div
        class="flex items-center mb-3 justify"
        style="white-space: normal; width: 60%; word-break: break-word"
      >
        <a
          class="text-2xl font-semibold text-white"
          :href="opportunity.node.link"
          target="_blank"
          rel="noopener"
          >{{ opportunity.node.name }}</a
        >
      </div>
      <div
        class="flex justify-start mb-2 mt-4"
        v-if="opportunity.node.description"
      >
        <em class="bi bi-info-circle me-3 icon"></em>
        <h3 class="text-white" style="margin-top: 3px">
          {{ opportunity.node.description }}
        </h3>
      </div>

      <div class="flex justify-start mb-2" v-if="opportunity.node.contact">
        <em class="bi bi-envelope me-3 icon"></em>
        <a :href="'mailto:' + opportunity.node.contact"
          ><h3
            class="text-white"
            style="margin-top: 3px; word-break: break-all"
          >
            {{ opportunity.node.contact }}
          </h3></a
        >
      </div>

      <hr
        v-if="
          (opportunity.node.description || opportunity.node.contact) &&
            (opportunity.node.maxRate ||
              opportunity.node.hourlyMaxRate ||
              opportunity.node.royaltyRate)
        "
        style="margin-bottom: 5px"
      />

      <div
        v-if="
          opportunity.node.maxRate ||
            opportunity.node.hourlyMaxRate ||
            opportunity.node.royaltyRate
        "
        class="flex justify-start mb-2"
      >
        <em class="bi bi-credit-card icon"></em>
        <h3
          class="text-white"
          style="margin-top: 3px"
          v-if="opportunity.node.minRate && opportunity.node.maxRate"
        >
          ${{ opportunity.node.minRate }} - ${{ opportunity.node.maxRate }}
        </h3>
        <h3
          class="text-white"
          style="margin-top: 3px"
          v-if="!opportunity.node.minRate && opportunity.node.maxRate"
        >
          ${{ opportunity.node.maxRate }}
        </h3>
        <h3
          class="text-white"
          style="margin-top: 3px"
          v-if="opportunity.node.hourlyMaxRate"
        >
          ${{ opportunity.node.hourlyMaxRate }} per hour
        </h3>
        <h3
          class="text-white"
          style="margin-top: 3px"
          v-if="opportunity.node.royaltyRate"
        >
          {{ opportunity.node.royaltyRate }}
        </h3>
      </div>
      <ul class="flex opportunity-category flex-wrap justify-content-end">
        <li v-for="i in opportunity.node.categories" v-bind:key="i">
          <span
            class="bg-green-900 text-green-100 text-xs font-semibold mr-2 px-2.5 py-0.5 dark:bg-green-700 dark:text-green-100 flex rounded-lg mt-2"
            >{{ i }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opportunity",
  props: {
    opportunity: {
      type: Object,
      required: true,
    },
  },
};
</script>
