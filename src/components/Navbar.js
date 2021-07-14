import SearchForm from "./SearchForm";

import logo from "../img/youtube-search-logo.png"

function Navbar({handleSubmit, searchQuery, setSearchQuery}) {
    
    return (
        <div className="container">
            <img src={logo} width="250" className="item"/>
            <SearchForm handleSubmit={handleSubmit} searchQuery={searchQuery}
                setSearchQuery={setSearchQuery} className="item"/>
        </div>
    )}
  
export default Navbar;