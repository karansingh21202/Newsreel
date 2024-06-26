// src/components/SearchBar.jsx

import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery, category, setCategory, handleSearch, handleInputChange }) => {
  return (
    <div className="search-bar">
      <select value={category} onChange={setCategory}>
        <option value="all">All</option>
        <option value="national">National</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="world">World</option>
        <option value="politics">Politics</option>
        <option value="technology">Technology</option>
        <option value="startup">Startup</option>
        <option value="entertainment">Entertainment</option>
        <option value="miscellaneous">Miscellaneous</option>
        <option value="hatke">Hatke</option>
        <option value="science">Science</option>
        <option value="automobile">Automobile</option>
      </select>
      <input 
        type="text" 
        placeholder="Search news..." 
        value={query} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
