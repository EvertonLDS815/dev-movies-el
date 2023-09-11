import { Container, Background } from './style'
import { useEffect, useState } from 'react'
<<<<<<< HEAD
import { getMovie } from '../../services/getData'
function Modal({ movieId, setShowModal }) {
=======
function Modal({ movieId }) {
>>>>>>> parent of f7a09ac (feat: rest and Modal usestate props part 2)
  const [movie, setMovie] = useState("")

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovie(movieId))
    }

    getMovies()
  }, [])
  return (
    <Background>
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
