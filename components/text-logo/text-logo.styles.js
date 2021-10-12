import styled from "styled-components";

export const Logo = styled.h2`
  font-size: 7rem;
  font-weight: 700;
  font-family: "Dancing Script", cursive;
  display: inline-block;
  background: linear-gradient(to bottom, green 35%, white, red 80%);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  margin: 0;
  cursor: pointer;
  &::selection {
    color: rgba(3, 37, 76, 0.7);
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 5rem;
  }
`;
