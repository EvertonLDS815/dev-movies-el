import styled, { css } from 'styled-components'

const buttonStyles = css`
  border: 3px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 30px;
  padding: 7px 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    color: #ff0000;
    background: #fff;
  }
`

export const ButtonWhite = styled.button`
  ${buttonStyles}
`
export const ButtonRed = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 3px solid transparent;
  box-shadow: 0px 0px 13px 3px rgba(255, 0, 0, 1);

  &:hover {
    box-shadow: 0px 0px 18px 5px rgba(255, 0, 0, 1);
    background: #ff0000;
    color: #fff;
  }
`
