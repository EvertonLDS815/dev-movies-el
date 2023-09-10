import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getImages } from '../../services/utils/getImages'
import { Background, Container, Info, Poster, ContainerButtons } from './style'
import { useState, useEffect } from 'react'
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState('')
  const [topMovies, setTopMovies] = useState('')
  const [topSeries, setTopSeries] = useState('')
  const [popularSeries, setPopularSeries] = useState('')
  const [topPeople, setTopPeople] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      setMovie(await getMovies())
      setTopMovies(await getTopMovies())
      setTopSeries(await getTopSeries())
      setPopularSeries(await getPopularSeries())
      setTopPeople(await getTopPeople())

    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background
          img={getImages(movie.backdrop_path)}
        >
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assita agora</Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={getImages(movie.poster_path)}
                alt="capa do filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies &&
        <Slider info={topMovies} title={'Top Filmes'} />
      }
      {topSeries &&
        <Slider info={topSeries} title={'Top Séries'} />
      }
      {popularSeries &&
        <Slider info={popularSeries} title={'Series Populares'} />
      }
      {topPeople &&
        <Slider info={topPeople} title={'Artistas Populares'} />
      }
    </>
  )
}

export default Home
