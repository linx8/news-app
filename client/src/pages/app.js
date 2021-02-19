import { useState } from "react";
import SearchForm from "../components/search-form";
import { searchArticles } from "../utils/articleSearch";
import "../styles/style.css";

function App() {
  const [results, updateResults] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchTerms = e.target.keywords.value;
    console.log("submitted: ", searchTerms);
    const response = await searchArticles(searchTerms);

    console.log(response);
  };

  return (
    <div className="app">
      <section>
        <h1>Search for articles</h1>
        <SearchForm onSubmit={onSubmit} />
      </section>
      <section>{results && <div>some results!</div>}</section>
    </div>
  );
}

export default App;
