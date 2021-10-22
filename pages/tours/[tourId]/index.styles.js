import styled, { css } from "styled-components";

const scrollbarStyle = css`
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: white;
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    /* background-color: #317eb7; */
    /* background: linear-gradient(45deg, #021b79, #0575e6, #205e9b); */
    background: ${(props) =>
      props.scrollColor
        ? props.scrollColor
        : "linear-gradient(45deg, #021b79, #0575e6, #205e9b);"};
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-image: ${(props) => props.gradientColor},
    url(${(props) => props.backgroundImage});
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
  font-size: 4rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: white;
  padding: 0rem 1.5rem;
  background-image: ${(props) => props.gradientText};
  z-index: 2;
  text-align: center;

  & span {
    line-height: 1;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
`;

export const HeaderContentItemsContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderContentItem = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;

  & svg {
    fill: black;
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    stroke: black;
    stroke-width: 8;
  }
`;

export const InformationSection = styled.div`
  display: flex;
  margin-top: -12rem;
  z-index: 1;

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
  @media only screen and (max-width: 75em) {
    padding: 12rem 6rem 6rem;
  }
  @media only screen and (max-width: 56.25em) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
  & p {
    text-align: right;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    width: 4rem;
    height: 4rem;
    stroke: ${(props) => props.iconColor};
    stroke-width: 0.5;
    fill: ${(props) => props.iconColor};
    margin-left: 1rem;
    transform: scale(0.8);
  }

  & > h4 {
    margin-left: 1.2rem;
  }
`;

export const GallerySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 6rem;
`;

export const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  direction: rtl;
  padding: 0 6rem;
`;

export const CommentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 2rem 4rem;
  overflow-x: scroll;
  direction: rtl;
  margin-bottom: 5rem;

  @media only screen and (hover: none) {
    scroll-snap-type: x mandatory;
  }

  ${scrollbarStyle}
`;
