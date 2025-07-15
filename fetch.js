const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName: "Github Username is undefined in .env",
  requestFailed: "GitHub API request failed.",
  requestFailedMedium: "Medium API request failed."
};

function fetchWithTimeout(options, postData, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = "";

      if (res.statusCode !== 200) {
        return reject(new Error("Status Code: " + res.statusCode));
      }

      res.on("data", chunk => (data += chunk));
      res.on("end", () => resolve(data));
    });

    req.on("error", reject);
    req.setTimeout(timeout, () => {
      req.destroy();
      reject(new Error("Request timed out"));
    });

    if (postData) req.write(postData);
    req.end();
  });
}

(async () => {
  try {
    if (USE_GITHUB_DATA === "true") {
      if (!GITHUB_USERNAME) throw new Error(ERR.noUserName);

      console.log(`🔵 Fetching GitHub profile for ${GITHUB_USERNAME}...`);
      const githubQuery = JSON.stringify({
        query: `
        {
          user(login:"${GITHUB_USERNAME}") { 
            name
            bio
            avatarUrl
            location
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    forkCount
                    stargazers {
                      totalCount
                    }
                    url
                    id
                    diskUsage
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }`
      });

      const githubOptions = {
        hostname: "api.github.com",
        path: "/graphql",
        port: 443,
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "User-Agent": "Node.js"
        }
      };

      const githubData = await fetchWithTimeout(githubOptions, githubQuery);
      fs.writeFileSync("./public/profile.json", githubData);
      console.log("✅ GitHub data saved to public/profile.json");
    }

    if (MEDIUM_USERNAME) {
      console.log(`🟣 Fetching Medium blogs for ${MEDIUM_USERNAME}...`);
      const mediumOptions = {
        hostname: "api.rss2json.com",
        path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
        port: 443,
        method: "GET"
      };

      const mediumData = await fetchWithTimeout(mediumOptions);
      fs.writeFileSync("./public/blogs.json", mediumData);
      console.log("✅ Medium data saved to public/blogs.json");
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
})();
