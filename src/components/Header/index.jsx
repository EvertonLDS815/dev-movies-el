import { Container, Menu, Li } from './style'
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png"
function Header() {
  return (
    <>
      <Container>
        <img src={Logo} alt="logo" />
        <Menu>
          <Li><Link to="/">Home</Link></Li>
          <Li><Link to="/filmes">Filmes</Link></Li>
          <Li><Link to="/series">Séries</Link></Li>
        </Menu>
      </Container>
    </>
  )
}

export default Header
