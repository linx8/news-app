/**
 * This function loops through all the responses and aims to aggregate the results
 * @param  {array} results
 */
const aggregateArticles = (results) => {
  const responses = results.map((result) => {
    // do something with response here
    return result;
  });

  return responses;
};

exports.aggregateArticles = aggregateArticles;
