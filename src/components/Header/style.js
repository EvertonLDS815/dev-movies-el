import styled from 'styled-components'

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  max-width: 100vw;

  img {
    width: 25%;
  }
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
`
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }
`
