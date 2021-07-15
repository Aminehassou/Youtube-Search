import { useHistory } from 'react-router-dom'

import searchIcon from "../img/search.svg"

function SearchForm({ handleSubmit, searchQuery, setSearchQuery }) {
  const history = useHistory();
  const onSubmit = e => {
    history.push(`?s=${searchQuery}`)
    e.preventDefault()
    handleSubmit(searchQuery)
  };

  return (
    <form action="/" method="get" onSubmit={onSubmit} className="search-form">
        <label htmlFor="header-search">
            <span className="hidden">Youtube search</span>
        </label>
          <input className="search-input"
              autoComplete="off"
              value={searchQuery}
              onInput={e => setSearchQuery(e.target.value)}
              type="text"
              id="header-search" 
              placeholder="Youtube Search"
              name="s"
          />
          <button className="search-button" type="submit"><img src={searchIcon} /></button>
    </form>
  );
}

export default SearchForm;
