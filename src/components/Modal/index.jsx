import { Container, Background } from './style'
import { useEffect, useState } from 'react'
import { getMovie } from '../../services/getData'
function Modal({ movieId, getShowModal, getUnShowModal }) {
  const [movie, setMovie] = useState("")

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovie(movieId))
    }

    getMovies()
  }, [])
  return (
    <Background onClick={getUnShowModal}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title='Youtube Video Player'
            height='500px'
            width='100%'
          >

          </iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal