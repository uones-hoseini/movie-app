import React from 'react';
// import PropTypes from 'prop-types';

function GenreDrop(props) {
  return (
    <div>
      <select
        className="form-select"
        value={props.selectedGenre}
        onChange={(e) => props.setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {(props.genres || []).map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreDrop;
