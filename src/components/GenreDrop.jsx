import React from 'react'

function GenreDrop(props) {
  return (
    <div>
        <select
          className="form-select"
          value={props.selectedGenre}
          onChange={(e) => props.setSelectedGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          {props.genres.map((movie,index) => (
            <option key={index} value={movie}>
              {movie}
            </option>
          ))}
        </select>
    </div>
  )
}

export default GenreDrop