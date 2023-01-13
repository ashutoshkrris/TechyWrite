// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");
var bodyParser = require("body-parser");

module.exports = function(api) {
  api.loadSource(async (actions) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // Fetching opportunities from src/data/opportunities.json
    const opportunities = require("./src/data/opportunities.json");

    const opportunitiesCollection = actions.addCollection({
      typeName: "Opportunities",
    });

    for (const opportunity of opportunities) {
      opportunitiesCollection.addNode(opportunity);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.configureServer((app) => {
    app.use(bodyParser.json());
    app.post("/create-issue", async (req, res) => {
      try {
        const { formData } = req.body;
        const owner = "ashutoshkrris",
          repo = "test-repo",
          title = `New Source: ${formData.companyName}`,
          body =
            "I want to add new source: \n\n" +
            "```json\n" +
            JSON.stringify(formData, null, 2) +
            "\n```";
        const data = {
          title: title,
          body: body,
          labels: ["new-source"],
          assignees: ["ashutoshkrris"],
        };
        const authToken = process.env.GITHUB_API_TOKEN;
        const headers = {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        };
        const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
        const response = await axios.post(url, data, { headers });
        res.status(201).json({
          message: "Issue created successfully",
          data: response.data,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
    });
  });
};
