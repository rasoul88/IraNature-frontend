import styled from "styled-components";

export const HeadingContainer = styled.div`
  /* margin-bottom: 8rem; */
  text-align: center;
`;

export const Heading2 = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  background: ${(props) =>
    props.background
      ? props.background
      : "linear-gradient(to right, rgb(24, 123, 205), rgb(3, 37, 76))"};
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 2.5rem;
  }

  &:hover {
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;
