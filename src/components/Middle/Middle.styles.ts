import styled from "styled-components";

export const MiddleStyled = styled.header`
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
   background-color: #D9D9D9;
   box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
 }
  .item-1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    padding-top: 18px;
  }
  .item-2 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    border-left: 2px solid #000000;
    border-right: 2px solid #000000;
    padding-top: 18px;
  }
  .item-3 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    padding-top: 18px;
  }
  .item-4 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
    padding-top: 18px;
  }
  .item-5 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    border: 2px solid #000000;
    padding-top: 18px;
  }
  .item-6 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
    padding-top: 18px;
  }
  .item-7 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    padding-top: 18px;
  }
  .item-8 {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    border-left: 2px solid #000000;
    border-right: 2px solid #000000;
    padding-top: 18px;
  }
  .item-9 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    padding-top: 18px;
  }
`