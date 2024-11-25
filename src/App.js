import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useEffect, useState } from "react"
import MovieList from "./components/MovieList"
import SearchBox from "./components/SearchBox"
import MovieListHeading from "./components/MovieListHeading"
import AddFavourite from "./components/AddFevourite"
import RemoveFavourite from "./components/RemoveFavourite"
import GenreDrop from "./components/GenreDrop"

function App() {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")

  async function getMovieRequest(searchValue) {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d1f6a7ee`
    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  function addFavouriteMovie(movie) {
    const newFavourite = [...favourites, movie]
    setFavourites(newFavourite)
  }

  function RemoveFavoriteMovie(movie) {
    const newFavoutiteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID)
    setFavourites(newFavoutiteList)
  }

  return (
    <div className="container-fluid movie-app ">
      <div className="row d-flex align-items-center mt-4 mb-4 m-4">
        <MovieListHeading heading="Movies" />
        <GenreDrop selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className=" d-flex align-items-center mt-4 mb-4 ">
        <MovieList handleFavouritesClick={addFavouriteMovie} movies={movies} favouriteComponent={AddFavourite} />
      </div>
      <div className=" d-flex align-items-center mt-4 mb-4 m-4">
        <MovieListHeading heading="Favoriets" />
      </div>

      <div className=" d-flex align-items-center mt-4 mb-4 ">
        <MovieList movies={favourites} handleFavouritesClick={RemoveFavoriteMovie} favouriteComponent={RemoveFavourite} />
      </div>
    </div>
  )
}

export default App
