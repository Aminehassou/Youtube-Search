import { useHistory } from 'react-router-dom';

function SearchForm({ handleSubmit, searchQuery, setSearchQuery }) {
  const history = useHistory();
  const onSubmit = e => {
    history.push(`?s=${searchQuery}`)
    e.preventDefault()
    handleSubmit()
  };
  
  return (
    <form action="/" method="get" onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span className="hidden">Youtube search</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
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
