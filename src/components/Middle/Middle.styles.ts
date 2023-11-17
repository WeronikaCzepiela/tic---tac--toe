import styled from 'styled-components'

export const MiddleStyled = styled.header`
  display: flex;
  justify-content: center;
  //align-items: center;

  .container {
    display: grid;
    width: 280px;
    aspect-ratio: 1;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center;
    align-items: stretch;
    justify-items: stretch;
    border: 2px solid #000000;
    border-radius: 8px;
    background-color: #d9d9d9;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  //.line {
  //  position: absolute;
  //  justify-content: center;
  //  height: 5px;
  //  background-color: #fa7f08;
  //  border-radius: 5px;
  //  opacity: 0.7;
`
