const fetch = require("node-fetch");
const utils = require("../utils");

// TODO: move this to a config file
const sources = [
  {
    name: "The Guardian",
    url:
      "https://content.guardianapis.com/search?api-key=34e2d533-999b-41f6-b4d5-477a890eb839&q=",
  },
];

/**
 * Search multiple sources for articles
 * Returns an array of responses, with the name of source
 * @param  {string} keywords
 * @returns {array} combinedResponse
 */
const searchMultipleArticles = async (keywords) => {
  const combinedResponse = await Promise.all(
    sources.map((source) =>
      fetch(`${source.url}${keywords}`)
        .then((response) => response.json())
        .then((response) => ({
          name: source.name,
          response: response.response,
        }))
    )
  );

  const groupedResults = utils.groupArticlesByCategory(combinedResponse);

  return groupedResults;
};

exports.searchMultipleArticles = searchMultipleArticles;
