const aggregateArticles = (results) => {
  // const results = results.slice(0);
  // do something with the articles

  const responses = results.map((result) => result.response);

  console.log(responses);

  return responses;
};

exports.aggregateArticles = aggregateArticles;
