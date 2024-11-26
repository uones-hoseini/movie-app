import { Button } from "bootstrap"
import React, { useState } from "react"

function Modal() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // const openModal = (movie) => {
  //   setSelectedMovie(movie)
  //   setShowModal(true)
  // }

  // Function to close modal
  const closeModal = () => {
    setShowModal(false)
    setSelectedMovie(null)
  }

  return (
    <div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedMovie?.Poster} alt={selectedMovie?.Title} style={{ width: "50%" }} />
          <p>{selectedMovie?.Description || "Description not available."}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modal
