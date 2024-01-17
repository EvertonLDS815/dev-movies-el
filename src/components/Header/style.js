import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-width: 100vw;
  background-color: ${(props) => (props.changedBackground ? '#000' : 'transparent')};
  transition: background-color 800ms ease-in-out;
  img {
    width: 25%;
  }
`
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 35px;
`
export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
  }

  &::after {
    content: '';
    height: 4px;
    width: ${(props) => (props.isactive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
