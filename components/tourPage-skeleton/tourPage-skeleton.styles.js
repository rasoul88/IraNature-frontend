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
    animation: shimmer 1.5s infinite;
    content: "";
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: ${(props) => props.gradientColor};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const HeaderContentContainer = styled.div`
  width: 40rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GradientText = styled.h4`
  font-size: 3.5rem;
  padding: 0.6rem 1.5rem;
  background-image: ${(props) => props.gradientText};
  z-index: 2;
  color: transparent;
  position: relative;
  overflow: hidden;
  & > span {
    ${skeletonAnimation}
  }
`;

export const HeaderContentItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.gradientText};
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
`;

export const HeaderContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  color: transparent;
  line-height: 2;
  ${skeletonAnimation}

  & > span {
    margin-right: 0.7rem;
  }
`;

export const InformationSection = styled.div`
  display: flex;
  margin-top: -12rem;
  z-index: 1;
  background-color: #bababa;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column-reverse;
  }
`;

const SidesStyle = css`
  width: 50%;
  display: flex;

  & h2 {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 100%;
    padding: 12rem 6rem 2rem;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 0 5rem;

  @media only screen and (max-width: 86em) {
    margin: 0 3rem;
  }
  @media only screen and (max-width: 75em) {
    margin: 0 1.5rem;
  }
`;

export const InfoContainer = styled.div`
  ${SidesStyle}
  padding: 12rem 2rem 6rem;
  flex-direction: row-reverse;
  align-items: flex-start;
  @media only screen and (max-width: 56.25em) {
    justify-content: center;
  }
  @media only screen and (max-width: 37.5em) {
    padding: 12rem 1rem 6rem;
  }
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: flex-end;
    padding: 12rem 4rem 4rem;
  }
`;

export const AboutContainer = styled.div`
  ${SidesStyle}
  padding: 12rem 12rem 6rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 75em) {
    padding: 12rem 6rem 6rem;
  }
  @media only screen and (max-width: 56.25em) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
  @media only screen and (max-width: 37em) {
    padding: 0 3rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;

  & > svg {
    width: 4rem;
    height: 4rem;
    stroke: ${(props) => props.iconColor};
    stroke-width: 0.5;
    fill: ${(props) => props.iconColor};
    transform: scale(0.8);
  }

  & > h4 {
    margin: 0 1.2rem;
  }
`;

export const SkeletonItem = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 1.6rem;
  background: #6d6d6d;
  border-radius: 50px;
  color: transparent;
  position: relative;
  overflow: hidden;
  ${skeletonAnimation}
`;

export const SkeletonText = styled.div`
  width: 70%;
  height: 20rem;
  margin: 1.6rem;
  background: #6d6d6d;
  border-radius: 5px;
  color: transparent;
  position: relative;
  overflow: hidden;

  ${skeletonAnimation}
`;
