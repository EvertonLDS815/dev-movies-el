import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import { getImages } from '../../services/utils/getImages'
import { Background, Container, Info, Poster, ContainerButtons } from './style'
import { useState, useEffect } from 'react'
import { getMovies, getPopularSeries, getTopMovies, getTopPeople, getTopSeries } from '../../services/getData'

function Home() {
  const [s  const [movie, setMovie] = useState('')
  const [topMovies, setTopMovies] = useState('')
  const [topSeries, setTopSeries] = useState('')
  const [popularSeries, setPopularSeries] = useState('')
  const [topPeople, setTopPeople] = useState('')
  const navigate = useNavigate();

  useEffect(() async function getAllData() {

    //   console.time('time')
    //   setMovie(await getMovies())
    //   setTopMovies(await getTopMovies())
    //   setTopSeries(await getTopSeries())
    //   setPopularSeries(await getPopularSeries())
    //   setTopPeople(await getTopPeople())
    //   console.timeEnd('time')

    // }

    // getAllData()

    // console.time('time')
    // setMovie(await getMovies())
    // setTopMovies(await getTopMovies())
    // setTopSeries(await getTopSeries())
    // setPopularSeries(await getPopularSeries())
    // setTopPeople(await getTopPeople())
    // console.timeEnd('time')

  })

}
console.time('time')
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

console.timeEnd('time')

getAllData()
  }, [])

return (
  <>
    {movie && (
      <Background
        img={getImages(movie.backdrop_path)}
      >
        <Modal movieId={movie.id} />
        <Container>
          <Info>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <ContainerButtons>
<<<<<<< HEAD
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assita agora</Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
=======
                <Button red>Assita agora</Button>
                <Button>Assista o Trailer</Button>
>>>>>>> parent of f7a09ac (feat: rest and Modal usestate props part 2)
}
alt = "capa do filme"
  />
            </Poster >
          </Container >
        </Background >
      )}
{
  topMovies &&
  <Slider info={topMovies} title={'Top Filmes'} />
}
{
  topSeries &&
  <Slider info={topSeries} title={'Top Séries'} />
}
{
  popularSeries &&
  <Slider info={popularSeries} title={'Series Populares'} />
}
{
  topPeople &&
  <Slider info={topPeople} title={'Artistas Populares'} />
}
    </>
  )
}

export default Home
