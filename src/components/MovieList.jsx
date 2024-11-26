import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal } from "react-bootstrap"

function MovieList(props) {
  const FavoriteComponent = props.favouriteComponent
  const [selectedMovie, setSelectedMovie] = useState()
  const [showModal, setShowModal] = useState(false)

  const openModal = (movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
    console.log("MOvie", movie)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedMovie(null)
  }

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3" key={index}>
          <img src={movie.Poster} alt="" onClick={() => openModal(movie)} />
          <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
            <FavoriteComponent />
          </div>

          <Modal show={showModal} onHide={closeModal} centered>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>
                {selectedMovie?.Title} www({selectedMovie?.Year})
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "black" }}>
              <img src={selectedMovie?.Poster} alt={selectedMovie?.Title} style={{ width: "30%" }} />
              <p>{selectedMovie?.Description || "Description not available."}</p>
            </Modal.Body>
            <Modal.Footer style={{ color: "black" }}>
              <Button variant="danger" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
    </>
  )
}

export default MovieList
