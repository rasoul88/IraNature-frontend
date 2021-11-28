import styled from "styled-components";

import { moveInRight, moveInLeft } from "../../utils/animations";

export const HeaderContainer = styled.div`
  height: 95vh;
  overflow: hidden;
  background-image: linear-gradient(
      to right bottom,
      rgba(24, 123, 205, 0.7),
      rgba(3, 37, 76, 0.7)
    ),
    url("/assets/img/shirez3.jpg");

  background-size: cover;
  background-position: bottom;
  position: relative;
  backface-visibility: hidden;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  @media only screen and (max-width: 37.5em) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
  }
`;

export const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  top: 3rem;
  left: 3rem;
  @media only screen and (max-width: 28.75em) {
    width: 60px;
    height: 60px;
    /* & svg {
      transform: scale(0.8);
    } */
  }
`;

export const TextBoxContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media only screen and (max-width: 37.5em) {
    width: 90%;
  }
`;

export const HeadingContainer = styled.h1`
  color: white;
  /* text-transform: uppercase; */
  backface-visibility: hidden;
  margin-bottom: 6rem;

  span:first-of-type {
    display: block;
    font-size: 8rem;
    font-weight: 400;
    letter-spacing: 1.2rem;
    animation-name: ${moveInLeft};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    text-align: right;
    backface-visibility: hidden;

    &::selection {
      background-color: transparent;
    }

    @media only screen and (max-width: 37.5em) {
      text-align: center;
      font-size: 5rem;
    }
  }

  span:last-of-type {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    word-spacing: 1.7rem;
    animation: ${moveInRight} 1s ease-out;
    text-align: left;
    backface-visibility: hidden;

    &::selection {
      background-color: transparent;
    }

    @media only screen and (max-width: 37.5em) {
      word-spacing: 1rem;
      text-align: center;
      font-size: 2rem;
    }
  }
`;
