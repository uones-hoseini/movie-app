import React from 'react';

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3'>
          <img key={index} src={movie.Poster} alt="" />
          <div onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'>
            <favouriteComponent/>
          </div>
        </div>
        
      ))}
    </>
  );
}

export default MovieList;
