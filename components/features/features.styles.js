import styled from "styled-components";
export const FeaturesContainer = styled.div`
  padding: 20rem 0;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(24, 123, 205, 0.8),
      rgba(3, 37, 76, 0.8)
    ),
    url("/assets/img/nat-7.jpg");
  background-position: center;
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: -10rem;
  backface-visibility: hidden;
  overflow: hidden;

  & > * {
    transform: skewY(7deg);
    width: 80%;
    padding: 1rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    backface-visibility: hidden;
    direction: rtl;
  }

  @media only screen and (max-width: 56.25em) {
    padding: 10rem 0;
  }
`;
