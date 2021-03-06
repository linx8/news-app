import React, { useState } from "react";
import SearchForm from "../components/search-form";
import { searchArticles } from "../utils/api";
import "../styles/style.css";
import Articles from "../components/articles";

function App() {
  const [results, updateResults] = useState([]);
  const [isFetching, updateFetching] = useState(false);
  const MIN_SEARCH_LENGTH = 3;

  const fetchResults = async (searchTerms) => {
    updateFetching(true);
    const response = await searchArticles(searchTerms);
    response && updateResults(response);
    updateFetching(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const searchTerms = e.target.keywords.value;
    fetchResults(searchTerms);
  };

  const onChange = async (e) => {
    const searchTerms = e.target.value;

    if (searchTerms.length > MIN_SEARCH_LENGTH) {
      fetchResults(searchTerms);
    }
  };

  const SearchResults = ({ results, index }) =>
    results.map((result) => {
      const groupedResults = [];
      Object.entries(result).forEach(([key, articles]) => {
        groupedResults.push(
          <div>
            <h2>{key}</h2>
            <div key={`result-${index}`} className="articles">
              <h2>{results.name}</h2>
              <Articles articles={articles} />
            </div>
          </div>
        );
      });
      return groupedResults;
    });

  return (
    <div className="app">
      <section>
        <h1>News App - Search for articles</h1>
        <SearchForm onSubmit={onSubmit} onChange={onChange} />
      </section>
      <section>
        {isFetching && <div>Searching...</div>}
        {results && <SearchResults results={results} />}
      </section>
    </div>
  );
}

export default App;
