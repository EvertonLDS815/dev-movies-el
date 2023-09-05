import { Container, Menu, Li } from './style'
import { Link, useLocation } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import { useState } from 'react';
function Header() {
  const [changedBackground, setChangedBackground] = useState(false);

  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changedBackground && window.scrollY > 150) {
      setChangedBackground(true);
    }
    if (changedBackground && window.scrollY <= 150) {
      setChangedBackground(false);
    }
  }
  return (
    <>
      <Container changedBackground={changedBackground}>
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
