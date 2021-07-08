
function SearchForm() {
  return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="hidden">Youtube search</span>
        </label>
        <input
            type="text"
            id="header-search" 
            placeholder="Youtube search"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
