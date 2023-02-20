<template>
  <div class="mb-4 px-4 sm:px-6 lg:px-8">
    <form @submit.prevent="submitForm" class="mt-6">
      <div class="text-white">
        <label>Company Name</label> <br />
        <input
          v-model="formData.name"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
          required
        />
      </div>
      <br />
      <div class="text-white">
        <label>Company Type</label> <br />
        <select
          v-model="formData.type"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
          required
        >
          <option v-for="option in companyTypes" :value="option">{{
            option
          }}</option>
        </select>
        <ul class="text-sm text-gray-500 list-disc pl-4">
          <li>
            "Publication" means a blog (including corporate blogs), magazine, or
            newsletter that buys articles.
          </li>
          <li>
            "Publisher" means a company that publishes books and pays royalties.
          </li>
          <li>
            "Agency" means a company that finds writers hourly or project work.
          </li>
        </ul>
      </div>
      <br />
      <div class="text-white">
        <label>Link</label><br />
        <input
          v-model="formData.link"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
          required
        />
        <p class="text-sm text-gray-500">
          If possible, link directly to the company's "write for us" or "guest
          post" page. Otherwise, link to the publication's main page.
        </p>
      </div>
      <br />
      <div class="text-white">
        <label>Editor's Email</label> <br />
        <input
          v-model="formData.contact"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
          type="email"
        />
        <p class="text-sm text-gray-500">
          If the editor has a public email address that they invite prospective
          authors to contact them at, enter it here.
        </p>
      </div>
      <br />
      <div class="text-white">
        <label>Topic(s)</label><br />
        <input
          v-model="formData.categories"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
        />
        <p class="text-sm text-gray-500">
          General topics like Front-End Development, Back-End Development, Data
          Science, Infrastructure, etc.
        </p>
      </div>
      <br />
      <div v-if="formData.type === 'Publication'">
        <div class="flex mb-4">
          <div class="text-white w-1/2 mr-4">
            <label>Minimum Rate</label><br />
            <div class="flex rounded-md shadow-sm mt-2">
              <span
                class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-800 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
                >$</span
              >
              <input
                v-model="formData.minRate"
                class="py-2 px-4 pr-11 block w-full bg-gray-800 text-gray-300 border-gray-200 shadow-sm rounded-r-md focus:ring focus:ring-psybeam/80 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              />
            </div>
          </div>
          <br />
          <div class="text-white w-1/2">
            <label>Maximum Rate</label> <br />
            <div class="flex rounded-md shadow-sm mt-2">
              <span
                class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-800 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
                >$</span
              >
              <input
                v-model="formData.maxRate"
                class="py-2 px-4 pr-11 block w-full bg-gray-800 text-gray-300 border-gray-200 shadow-sm rounded-r-md focus:ring focus:ring-psybeam/80 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              />
            </div>
          </div>
          <br />
        </div>
        <p class="text-sm text-gray-500">
          Please do not include the USD($) symbol.
        </p>
        <br />
      </div>
      <div v-else-if="formData.type === 'Publisher'">
        <div class="text-white">
          <label for=""> Royalty Rate<br /></label>
          <input
            v-model="formData.royaltyRate"
            type="text"
            class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
            required
          />
        </div>
        <br />
      </div>
      <div v-else>
        <div class="flex mb-4">
          <div class="text-white w-1/2 mr-4">
            <label>Hourly Minimum Rate</label><br />
            <div class="flex rounded-md shadow-sm mt-2">
              <span
                class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-800 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
                >$</span
              >
              <input
                v-model="formData.hourlyMinRate"
                class="py-2 px-4 pr-11 block w-full bg-gray-800 text-gray-300 border-gray-200 shadow-sm rounded-r-md focus:ring focus:ring-psybeam/80 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              />
            </div>
          </div>
          <br />
          <div class="text-white w-1/2">
            <label>Hourly Maximum Rate</label> <br />
            <div class="flex rounded-md shadow-sm mt-2">
              <span
                class="pr-4 pl-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-green-800 bg-green-800 text-white dark:bg-green-800 dark:border-green-800 dark:text-white"
                >$</span
              >
              <input
                v-model="formData.hourlyMaxRate"
                class="py-2 px-4 pr-11 block w-full bg-gray-800 text-gray-300 border-gray-200 shadow-sm rounded-r-md focus:ring focus:ring-psybeam/80 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              />
            </div>
          </div>
          <br />
        </div>
        <p class="text-sm text-gray-500">
          Please do not include the USD($) symbol.
        </p>
        <br />
      </div>
      <div class="text-white">
        <label>Notes(Description)</label><br />
        <textarea
          v-model="formData.description"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
          rows="6"
        ></textarea>
        <p class="text-sm text-gray-500">
          Any other information you know about the publication.
        </p>
      </div>
      <br />
      <button
        type="submit"
        id="submitBtn"
        class="bg-green-800 text-white rounded p-3 focus:outline-none focus:ring focus:ring-psybeam/80 hover:bg-green-900"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        type: "Publication",
        link: "",
        contact: "",
        categories: "",
        description: "",
        minRate: "",
        maxRate: "",
        royaltyRate: "",
        hourlyMinRate: "",
        hourlyMaxRate: "",
      },
      companyTypes: ["Publication", "Publisher", "Agency"],
    };
  },
  computed: {
    rateFilled() {
      return (
        this.formData.minRate ||
        this.formData.maxRate ||
        this.formData.hourlyMinRate ||
        this.formData.hourlyMaxRate ||
        this.formData.royaltyRate
      );
    },
  },
  methods: {
    async submitForm() {
      if (!this.rateFilled) {
        alert("Please enter at least one rate");
        return;
      }

      document.getElementById("submitBtn").innerHTML = "Submitting";

      for (const key in this.formData) {
        if (this.formData.hasOwnProperty(key)) {
          if (
            key === "contact" ||
            key === "minRate" ||
            key === "maxRate" ||
            key === "royaltyRate" ||
            key === "hourlyMinRate" ||
            key === "hourlyMaxRate"
          ) {
            if (this.formData[key] === "") {
              delete this.formData[key];
            }
          }
        }
      }

      // Split the category string by commas
      if (this.formData.categories !== "") {
        this.formData.categories = this.formData.categories
          .split(",")
          .map((category) => category.trim());
      } else {
        this.formData.categories = [];
      }

      // Append to the link
      let referrer =
        "?utm_source=referral&utm_medium=aggregator&utm_campaign=techywrite.ashutoshkrris.in";
      this.formData.link = this.formData.link.concat(referrer);

      const data = {
        formData: this.formData,
      };
      const response = await axios.post(
        "https://github-issue-khaki.vercel.app/create-issue",
        data
      );
      if (response.status === 201) {
        document.getElementById("submitBtn").innerHTML = "Submit";
        alert("Form submitted successfully!");
        this.formData = {
          name: "",
          type: "Publication",
          link: "",
          contact: "",
          categories: "",
          description: "",
          minRate: "",
          maxRate: "",
          royaltyRate: "",
          hourlyMinRate: "",
          hourlyMaxRate: "",
        };
      } else alert(`Something went wrong: ${response}`);
    },
  },
};
</script>
