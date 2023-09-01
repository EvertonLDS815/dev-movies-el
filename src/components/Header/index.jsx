import { Container, Menu, Li } from './style'
import { Link, useLocation } from 'react-router-dom'
import Logo from "../../assets/logo.png"
function Header() {

  const { pathname } = useLocation()

  console.log(pathname)
  return (
    <>
      <Container>
        <img src={Logo} alt="logo" />
        <Menu>
          <Li isActive={pathname === '/'}><Link to="/">Home</Link></Li>
          <Li isActive={pathname.includes('filmes')}><Link to="/filmes">Filmes</Link></Li>
          <Li isActive={pathname.includes('series')}><Link to="/series">Séries</Link></Li>
        </Menu>
      </Container>
    </>
  )
}

export default Header
