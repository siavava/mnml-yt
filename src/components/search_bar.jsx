import React, { useState } from 'react';

// Why does ESLINT complain if this is an arrow function?
function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearchChange(event.target.value);
  };
  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchTerm} />
    </div>
  );
}

export default SearchBar;
