import styled, { css } from "styled-components";
import DownArrow from "../../public/assets/icons/fast-forward.svg";
import { Shake } from "../../utils/animations";

const cardSideStyle = css`
  height: 49rem;
  width: 100%;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
  }
`;

export const FrontContainer = styled.div`
  ${cardSideStyle}
  background-color: white;
`;

export const ImageContainer = styled.div`
  height: 23rem;
  background-size: cover;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: ${(props) => props.gradientColor},
    url(${(props) => props.backgroundImage});
`;

export const HeadingContainer = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: white;
  position: absolute;
  top: 10.9rem;
  right: 0rem;
  width: 75%;
  padding: 0rem 1.5rem;
  background-image: ${(props) => props.gradientText};
  z-index: 2;

  @media only screen and (max-width: 1500px) {
    width: 85%;
  }

  @media only screen and (max-width: 56.25em) {
    width: 60%;
  }

  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`;

export const SpanContainer = styled.span`
  line-height: 1;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  padding-top: 1rem;
  color: #555;

  ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;

      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
  }
`;

export const BackContainer = styled.div`
  ${cardSideStyle}
  transform: rotateY(-180deg);
  background-image: ${(props) => props.gradientColor};

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    transform: rotateY(0);
    -webkit-clip-path: polygon(0 11.6%, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 11.6%, 100% 0, 100% 100%, 0 100%);
    border-top-right-radius: 0;
    margin-top: ${(props) => (props.isOpen ? "-4rem" : "-30rem")};
  }
`;

export const Arrow = styled(DownArrow)`
  animation: ${Shake} 0.9s ease infinite;
  backface-visibility: hidden;
  position: absolute;
  right: 16%;
  top: 21%;
  width: 60%;
`;

export const DetailButton = styled.button`
  display: none;
  z-index: 5;
  cursor: pointer;
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    background-color: white;
    position: absolute;
    top: 10%;
    right: 46%;
    transition: all 0.3s 1s ease;
    transform: ${(props) =>
      props.isOpen ? "rotate(270deg)" : "rotate(90deg)"};
    transform-origin: center;
    backface-visibility: hidden;
  }
`;

export const CtaContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    width: 100%;
    padding: 7rem 4rem 4rem 4rem;
  }
`;

export const PriceContainer = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    margin-bottom: 3rem;
  }
`;

export const OnlyContainer = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
`;

export const ValueContainer = styled.div`
  font-size: 4rem;
  font-weight: 100;
`;

export const CardContainer = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  min-width: 30rem;
  width: 21%;
  margin: 0 3rem;

  &:hover ${FrontContainer} {
    transform: rotateY(180deg);

    @media only screen and (max-width: 56.25em), only screen and (hover: none) {
      transform: rotateY(0);
    }
  }

  &:hover ${BackContainer} {
    transform: rotateY(0);
  }

  @media only screen and (max-width: 1000px) {
    margin: 0 1rem;
  }

  @media only screen and (max-width: 56.25em) {
    max-width: 40rem;
    width: 90%;
    align-self: center;
    margin-bottom: 5rem;
    height: auto;
    background-color: white;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  }
`;
