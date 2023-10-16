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
`