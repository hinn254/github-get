import React, { useState } from "react";

const SearchBar = ({ value = (f) => f }) => {
  const [searchItem, setSearchItem] = useState("");

  const searchValue = () => {
    console.log(`intial value ${searchItem}`);

    value(searchItem);
    console.log(`FInal value ${searchItem}`);
    setSearchItem("");
  };

  return (
    <div className="search-holder">
      <input
        className="input-field"
        placeholder="Enter what to search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button className="btn" onClick={searchValue}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
