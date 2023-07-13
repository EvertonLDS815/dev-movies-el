import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <a href="/">Home</a>
      <a href="/series" style={{ display: 'block' }}>
        Séries
      </a>
      <a href="/filmes" style={{ display: 'block' }}>
        Filmes
      </a>
    </>
  )
}

export default DefaultLayout
