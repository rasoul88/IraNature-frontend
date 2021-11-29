import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #f7f7f7;
  display: flex;
`;

export const ContentContainer = styled.div`
  width: ${(props) => (props.panelStatus ? "calc(100% - 30rem)" : "100%")};
  padding: 12rem 10rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: ${(props) => (props.panelStatus ? "30rem" : "0")};
  transition: all 0.5s ease-in-out;
  min-height: 100vh;

  /* for mobile size {
      width: 100%;
      margin-left: 0;
    } */

  @media only screen and (max-width: 37.5em) {
    padding-bottom: 5rem;
    padding: 15rem 2rem;
    width: 100%;
    margin-left: 0;
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
  margin-top: 6rem;

  @media only screen and (max-width: 56.25em) {
    /* flex-direction: column; */
  }
  @media only screen and (hover: none) {
    z-index: 1;
  }
`;

export const PaginateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;
