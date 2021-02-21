import React from "react";

const SearchForm = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input
      name="keywords"
      onChange={onChange}
      type="text"
      placeholder="search"
    />
    <p>
      <button type="submit">Search</button>
    </p>
  </form>
);

export default SearchForm;
