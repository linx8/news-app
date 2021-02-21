/**
 * This function loops through all the responses
 * Groups by section category
 * @param  {array} results
 */
const groupArticlesByCategory = (results) => {
  const responses = results.map((result) => {
    const newResults = result.response.results.reduce(
      (groupedResults, currentResult) => {
        groupedResults[currentResult.sectionId] =
          groupedResults[currentResult.sectionId] || [];
        groupedResults[currentResult.sectionId].push(currentResult);
        return groupedResults;
      },
      {}
    );

    return newResults;
  });

  return responses;
};

exports.groupArticlesByCategory = groupArticlesByCategory;
