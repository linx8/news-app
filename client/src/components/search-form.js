const SearchForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input name="keywords" type="text" placeholder="search" />
    <p>
      <button type="submit">Search</button>
    </p>
  </form>
);

export default SearchForm;
