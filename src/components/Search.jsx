import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(() => {
      return e.target.dataset.type;
    });
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="input-field ">
      <input
        type="search"
        className="validate"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      <button className="btn search-btn" onClick={() => searchMovies(search, type)}>
        Search
      </button>
      <div className="">
        <label>
          <input name="type" type="radio" data-type="all" onChange={handleFilter} checked={type === 'all'} />
          <span>All</span>
        </label>
        <label>
          <input name="type" type="radio" data-type="movie" onChange={handleFilter} checked={type === 'movie'} />
          <span>Movies only</span>
        </label>
        <label>
          <input name="type" type="radio" data-type="series" onChange={handleFilter} checked={type === 'series'} />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};
Search.defaultProps = {
  searchMovies: () => {},
};

Search.propTypes = {
  searchMovies: PropTypes.func,
};

export default Search;
