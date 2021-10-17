import styled, { css } from "styled-components";

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
    flex-direction: column;
  }
`;

const SidesStyle = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 12rem;

  & > div {
    margin-bottom: 0rem;
  }
  & h2 {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 100%;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 12rem 6rem;
  }
`;

export const InfoContainer = styled.div`
  ${SidesStyle}
  background-color: #f7f7f7;
  align-items: flex-end;
`;

export const AboutContainer = styled.div`
  ${SidesStyle}
  align-items: center;

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
  }

  & > h4 {
    margin-left: 1.2rem;
  }
`;

export const AvatarContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-right: 0.8rem;

  & > svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
