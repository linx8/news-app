const aggregateArticles = (results) => {
  const responses = results.map((result) => result.response);

  return responses;
};

exports.aggregateArticles = aggregateArticles;
