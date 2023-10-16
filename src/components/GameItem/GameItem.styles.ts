import styled from "styled-components";

export const GameItemStyled = styled.header`
  width: 100%;
  height: 100%;

  .item {
    width: (280/3)px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .item-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .item-2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    border-left: 2px solid #000000;
    border-right: 2px solid #000000;
  }

  .item-3 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .item-4 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }

  .item-5 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    border: 2px solid #000000;
  }

  .item-6 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }

  .item-7 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .item-8 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    border-left: 2px solid #000000;
    border-right: 2px solid #000000;
  }

  .item-9 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`