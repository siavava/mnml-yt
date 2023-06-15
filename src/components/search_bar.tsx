import React, { useState } from 'react';

interface SearchBarProps {
  onSearchChange: Function;
}
// Why does ESLINT complain if this is an arrow function?
function SearchBar({ onSearchChange }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (event: any) => {
    const eventTarget = event.target as HTMLInputElement;
    setSearchTerm(eventTarget.value);
    onSearchChange(eventTarget.value);
  };
  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchTerm} placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
