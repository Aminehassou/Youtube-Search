
function SearchForm(props) {
  return (
    <form action="/" method="get" onSubmit={() => props.handleSubmit()}>
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
