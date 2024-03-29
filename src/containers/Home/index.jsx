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
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getTopPeople()
      ]).then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
        setMovie(movie)
        setTopMovies(topMovies)
        setTopSeries(topSeries)
        setPopularSeries(popularSeries)
        setTopPeople(topPeople)
      }).catch(err => console.error(err))
    }


    getAllData()
  }, [])

  function showTrailer() {
    setShowModal(true);
  }
  function unShowTrailer() {
    setShowModal(false);
  }
  return (
    <>
      {movie && (
        <Background
          imagePath={getImages(movie.backdrop_path)}
        >
          {showModal && 
          <Modal
            movieId={movie.id}
            getShowModal={showTrailer} 
            getUnShowModal={unShowTrailer} 
            />}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assita agora</Button>
                <Button onClick={showTrailer}>Assista o Trailer</Button>
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