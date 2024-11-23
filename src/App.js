import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useEffect, useState } from "react"
import MovieList from "./components/MovieList"
import SearchBox from "./components/SearchBox"
import MovieListHeading from "./components/MovieListHeading"
import AddFavourite from "./AddFevourite"

function App() {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState('')

  async function getMovieRequest() {
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
  return (
    <div className="ontainer-fluid movie-app ">
      <div className="row d-flex align-items-center mt-4 mb-4 m-4">
        <MovieListHeading heading="Movies" />

        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="  d-flex align-items-center mt-4 mb-4 ">
        <MovieList movies={movies} favouriteComponent={AddFavourite}/>
      </div>
      <div className=" d-flex align-items-center mt-4 mb-4 m-4">
        <MovieListHeading heading="Favoriets" />

      
      </div>
      <div className='row'>
				<MovieList
					movies={favourites}
					// handleFavouritesClick={removeFavouriteMovie}
					// favouriteComponent={RemoveFavourites}
				/>
			</div>
    </div>
  )
}

export default App
