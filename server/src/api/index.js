const fetch = require("node-fetch");

const sources = [
  "https://content.guardianapis.com/search?api-key=34e2d533-999b-41f6-b4d5-477a890eb839&q=",
];
/**
 * Search Articles function
 * searches articles and returns some results
 * @param  {string} keywords
 */
const searchArticles = async (keywords) => {
  return fetch(`${sources[0]}${keywords}`)
    .then((res) => res.json())
    .then((json) => {
      return json.response;
    });
};

exports.searchArticles = searchArticles;