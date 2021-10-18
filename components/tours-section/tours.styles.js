import styled from "styled-components";

export const ToursContainer = styled.div`
  background-color: #f7f7f7;
  padding: 25rem 0 15rem 0;
  margin-top: -11rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media only screen and (max-width: 37.5em) {
    padding-bottom: 5rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
  @media only screen and (hover: none) {
    z-index: 1;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 8rem;
  text-align: center;

  @media only screen and (max-width: 37.5em) {
    margin-top: 5rem;
  }

  @media only screen and (hover: none) {
    z-index: 0;
  }
`;
