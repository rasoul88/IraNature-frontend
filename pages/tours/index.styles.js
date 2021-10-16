import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #f7f7f7;
  padding: 12rem 10rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media only screen and (max-width: 37.5em) {
    padding-bottom: 5rem;
    padding: 15rem 2rem;
  }
`;

export const CardsContainer = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31.5rem, 1fr));
  grid-gap: 4rem;
  justify-items: center;
  direction: rtl;

  @media only screen and (max-width: 56.25em) {
    /* flex-direction: column; */
  }
  @media only screen and (hover: none) {
    z-index: 1;
  }
`;
