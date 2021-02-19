import React, { useState } from "react";
import SearchForm from "../components/search-form";
import { searchArticles } from "../utils/articleSearch";
import "../styles/style.css";
import ArticleResults from "../components/articles";

function App() {
  const [results, updateResults] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchTerms = e.target.keywords.value;
    const response = await searchArticles(searchTerms);
    console.log(response);
    response && updateResults(response.results);
  };

  return (
    <div className="app">
      <section>
        <h1>Search for articles</h1>
        <SearchForm onSubmit={onSubmit} />
      </section>
      <section>
        {results && (
          <div className="articles">
            <ArticleResults articles={results} />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
