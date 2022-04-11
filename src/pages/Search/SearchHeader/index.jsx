import React from "react";
import SearchInput from "../../../components/SearchInput";
import './style.less'

const SearchHeader=()=>{
  function backHandle(){
    window.history.back();
  }

  return (
    <div id="search-header" className="clear-fix">
      <span className="back-icon float-left" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
        <i className="icon-search"></i>
        <SearchInput/>
      </div>
    </div>
  )
}

export default SearchHeader