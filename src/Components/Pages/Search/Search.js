import React from 'react'
import "../../Header/Header.css"
import SearchIcon from "@mui/icons-material/Search";




const Search = () => {
  return (
    <div> <div className="Navbar-search">
    <input
      placeholder="Search Here For Movie..."
      className="searchInput"
    />
    <button className="searchBtn">
      <SearchIcon size={1} />
    </button>
  </div></div>
  )
}

export default Search