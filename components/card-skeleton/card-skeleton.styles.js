import styled, { css } from "styled-components";

const skeletonAnimation = css`
  &::after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      95deg,
      rgba(170, 170, 170, 0) 0,
      rgba(170, 170, 170, 0.2) 40%,
      rgba(170, 170, 170, 0.4) 50%,
      rgba(170, 170, 170, 0.2) 60%,
      rgba(170, 170, 170, 0) 100%
    );
    z-index: 3;
    animation: shimmer 2s infinite;
    content: "";
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

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
  background-color: #aaa;
`;

export const ImageContainer = styled.div`
  height: 23rem;
  background-size: cover;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: ${(props) => props.gradientColor};
`;

export const HeadingContainer = styled.div`
  position: absolute;
  top: 13rem;
  right: 0rem;
  width: 65%;
  height: 5.8rem;
  background-image: ${(props) => props.gradientText};
  z-index: 2;
  white-space: nowrap;
  line-height: 2.5;
  overflow: hidden;

  ${skeletonAnimation}
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  padding-top: 1rem;

  ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    li {
      text-align: center;
      font-size: 1.5rem;
      margin: 1.6rem;
      background: #6d6d6d;
      border-radius: 50px;
      color: transparent;
      position: relative;

      ${skeletonAnimation}
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
    z-index: 55;
  }
`;

export const DetailButton = styled.button`
  display: none;
  z-index: 5;
  overflow: hidden;
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 10%;
    right: 46%;
    transition: all 0.3s 1s ease;
  }

  background: #6d6d6d;

  ${skeletonAnimation}
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
    transform: translate(0, 2rem);
    width: 100%;
    padding: 7rem 4rem 4rem 4rem;
  }
`;

export const PriceContainer = styled.div`
  text-align: center;
  color: transparent;
  margin-bottom: 8rem;
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    margin-bottom: 5rem;
  }
`;

export const OnlyContainer = styled.div`
  width: 30%;
  font-size: 2rem;
  background: #6d6d6d;
  border-radius: 50px;
  color: transparent;
  position: relative;
  margin: 0 auto 2rem;
  overflow: hidden;
  ${skeletonAnimation}
`;

export const ValueContainer = styled.div`
  width: 70%;
  font-size: 2rem;
  font-weight: 100;
  background: #6d6d6d;
  border-radius: 50px;
  color: transparent;
  position: relative;
  margin: 0 auto 1rem;
  overflow: hidden;

  ${skeletonAnimation}
`;

export const CardContainer = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  min-width: 32rem;
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
