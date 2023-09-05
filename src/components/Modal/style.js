import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  background-color: #000;
  width: 70%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  iframe {
    border: none;
  }
`
