<template>
  <div class="mb-4 px-4 sm:px-6 lg:px-8">
    <!-- <h2 class="flex text-2xl text-white font-semibold mr-4 py-0.5">
      Suggest a Source
    </h2>
    <p class="text-gray-400 text-sm mb-6 mt-3">
      You can also use this form to request an update to an existing resource.
    </p> -->
    <form @submit.prevent="submitForm" class="mt-6">
      <div class="text-white">
        <label>Company Name</label> <br />
        <input
          v-model="formData.companyName"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
          required
        />
      </div>
      <br />
      <div class="text-white">
        <label>Company Type</label> <br />
        <select
          v-model="formData.companyType"
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
          v-model="formData.editorEmail"
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
          v-model="formData.topics"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
        />
        <p class="text-sm text-gray-500">
          General topics like Front-End Development, Back-End Development, Data
          Science, Infrastructure, etc.
        </p>
      </div>
      <br />
      <div class="text-white">
        <label>Rate Type</label> <br />
        <select
          v-model="selectedRateType"
          class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
          required
        >
          <option v-for="option in rateTypes" :value="option">{{
            option
          }}</option>
        </select>
        <p class="text-sm text-gray-500">
          All the rates must be in USD($).
        </p>
      </div>
      <br />
      <div v-if="selectedRateType === 'Minimum - Maximum Range'">
        <div class="flex">
          <div class="text-white w-1/2 mr-4">
            <label>Minimum Rate</label><br />
            <input
              v-model="formData.minRate"
              class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
            />
          </div>
          <br />
          <div class="text-white w-1/2">
            <label>Maximum Rate</label> <br />
            <input
              v-model="formData.maxRate"
              class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
            />
          </div>
          <br />
        </div>
        <p class="text-sm text-gray-500">
          Please do not include the USD($) symbol.
        </p>
        <br />
      </div>
      <div v-else-if="selectedRateType === 'Royalty Rate'">
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
        <div class="text-white">
          <label>Hourly Maximum Rate</label><br />
          <input
            v-model="formData.hourlyMaxRate"
            class="px-4 py-2 mt-2 mb-4 bg-gray-800 text-gray-300 outline-none rounded w-full -mr-[4.5rem] focus:ring focus:ring-psybeam/80"
            required
          />
          <p class="text-sm text-gray-500">
            Please do not include the USD($) symbol.
          </p>
        </div>
        <br />
      </div>
      <div class="text-white">
        <label>Notes(Description)</label><br />
        <textarea
          v-model="formData.notes"
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
        companyName: "",
        companyType: "Publication",
        link: "",
        editorEmail: "",
        topics: "",
        notes: "",
        minRate: "",
        maxRate: "",
        royaltyRate: "",
        hourlyMaxRate: "",
      },
      companyTypes: ["Publication", "Publisher", "Agency"],
      rateTypes: [
        "Minimum - Maximum Range",
        "Hourly Maximum Rate",
        "Royalty Rate",
      ],
      selectedRateType: "Minimum - Maximum Range",
    };
  },
  computed: {
    rateFilled() {
      return (
        this.formData.minRate ||
        this.formData.maxRate ||
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

      // Remove all fields with empty values
      this.formData = Object.entries(this.formData)
        .filter(([key, value]) => value)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});
        
      const data = {
        formData: this.formData,
      };
      const response = await axios.post("/create-issue", data);
      if (response.status === 201) {
        alert("Form submitted successfully!");
        this.formData = {
          companyName: "",
          companyType: "Publication",
          link: "",
          editorEmail: "",
          topics: "",
          notes: "",
          minRate: "",
          maxRate: "",
          royaltyRate: "",
          hourlyMaxRate: "",
        };
        this.selectedRateType = "Minimum - Maximum Range";
      } else alert(`Something went wrong: ${response}`);
    },
  },
};
</script>
