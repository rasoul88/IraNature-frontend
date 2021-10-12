import styled, { css } from "styled-components";

export const AboutContainer = styled.div`
  background-color: #f7f7f7;
  padding: 25rem 3rem;
  margin-top: -20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 37.5em) {
    padding: 25rem 0 20rem 0;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1400px;
  display: flex;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`;

export const TextsContainer = styled.div`
  width: 48%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (max-width: 56.25em) {
    width: 98%;
  }

  h3 {
    margin-top: 0;
  }
`;

export const Paragraph = styled.p`
  text-align: right;
  font-size: 1.6rem;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const CompositionContainer = styled.div`
  width: 48%;
  margin-left: 2%;
  position: relative;

  @media only screen and (max-width: 56.25em) {
    width: 98%;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 37.5em) {
    transform: scale(0.9);
  }

  &:hover img:not(:hover) {
    transform: scale(0.9);
  }
`;

const getPublicStyles = css`
  width: 55%;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  position: absolute;
  outline-offset: 2rem;

  @media only screen and (max-width: 56.25em) {
    float: left;
    position: relative;
    width: 33.333333%;
    box-shadow: 0 1.5rem 3rem rgba($color: #000000, $alpha: 0.2);
    outline-offset: 1rem;
  }

  &:hover {
    z-index: 2;
    transform: scale(1.1) translateY(-1.5rem);
    box-shadow: 0 2.5rem 4rem rgba($color: #000000, $alpha: 0.5);
    outline: 0.8rem solid rgb(3, 37, 76);

    @media only screen and (max-width: 56.25em) {
      outline: 0.4rem solid rgb(3, 37, 76);
    }
  }
`;

export const ImageContainer1 = styled.img`
  ${getPublicStyles}
  left: 0;
  top: -2rem;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    top: 0;
    transform: scale(1.2);
  }
`;

export const ImageContainer2 = styled.img`
  ${getPublicStyles}
  right: 0;
  top: 2rem;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    top: -1rem;
    transform: scale(1.3);
    z-index: 1;
  }
`;

export const ImageContainer3 = styled.img`
  ${getPublicStyles}
  left: 20%;
  top: 10rem;
  transition: all 0.2s;

  @media only screen and (max-width: 56.25em) {
    top: 1rem;
    left: 0;
    transform: scale(1.1);
  }
`;
