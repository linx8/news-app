// Searches the endpoint
const searchArticles = async (keywords) => {
  const searchEndpoint = "/api/news-search";
  // do some searching
  const response = await fetch(
    `${searchEndpoint}?q=${encodeURIComponent(keywords)}`
  );

  const data = await response.json();

  return data;
};

export { searchArticles };
