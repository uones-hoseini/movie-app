import React from "react"
import AddFavourite from "./AddFevourite"

function MovieList(props) {
  const FavoriteComponent = props.favouriteComponent
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img key={index} src={movie.Poster} alt="" />
          <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieList
