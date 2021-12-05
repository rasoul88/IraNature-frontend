import styled from "styled-components";
import { pageInRight } from "../../utils/animations";

export const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5rem 0;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  animation: ${pageInRight} 0.7s cubic-bezier(1, 0, 0, 1);
`;

export const EditInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  @media only screen and (max-width: 87.5em) {
    flex-direction: column;
  }

  @media only screen and (max-width: 75em) {
    width: 100%;
  }

  & > div {
    flex: 3;
    margin-left: 5rem;
    @media only screen and (max-width: 75em) {
      margin-left: 0;
    }
  }
`;

export const UserPictureContainer = styled.div`
  position: relative;
  align-self: center;
  margin-bottom: 3rem;
  flex: 1;
`;

export const UserPicture = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 2;
  overflow: hidden;
`;

export const PhotoSelectorContainer = styled.div`
  width: 12rem;
  height: 4rem;
  position: absolute;
  top: 11.8rem;
  right: -7rem;
  z-index: 2;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 3rem 2rem;
  @media only screen and (max-width: 26.25em) {
    padding: 0 2rem 2rem;
  }
`;

export const DataItem = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 6rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 36.25em) {
    width: 100%;
    padding: 0 4rem;
  }

  & > h4 {
    margin: 0;
    font-size: 1.5rem;
    white-space: nowrap;
  }

  & > div {
    width: 26rem;
    direction: ltr;

    & .DatePicker {
      width: 100%;
      z-index: 99;
    }

    & #multiselect-react-dropdown .optionListContainer {
      box-shadow: 0 1rem 3rem rgb(0 0 0 / 70%);
      border-radius: 8px;
      overflow: hidden;

      & .optionContainer::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: white;
        border-radius: 8px;
      }

      & .optionContainer::-webkit-scrollbar {
        width: 3px;
        background-color: white;
      }

      & .optionContainer::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: linear-gradient(45deg, #021b79, #0575e6, #205e9b);
      }
    }
  }

  & input {
    color: #333;
  }

  @media only screen and (max-width: 26.25em) {
    width: 100%;
    padding: 0 2rem;
    flex-direction: column;
    & > h4 {
      width: 100%;
      margin-bottom: 1rem;
    }

    & > div {
      width: 90%;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 36.25em) {
    width: 100%;
  }
`;

export const ChangePasswordContainer = styled.div`
  margin-top: 5rem;
  width: 70%;

  @media only screen and (max-width: 87.5em) {
    width: 90%;
  }
  @media only screen and (max-width: 75em) {
    width: 100%;
  }
`;

/*--------------------------------------*/

export const CreateTourContainer = styled.div`
  width: 70%;

  @media only screen and (max-width: 87.5em) {
    width: 90%;
  }
  @media only screen and (max-width: 75em) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  direction: rtl;
  max-width: 100%;
  min-width: 100%;
  min-height: 7rem;
  border-color: lightgray;
  font-family: inherit;
  border-radius: 5px;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: white;
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: linear-gradient(45deg, #021b79, #0575e6, #205e9b);
  }
`;

export const CoverPreview = styled.div`
  width: 100%;
  height: 17rem;
  background-size: cover;
  background-blend-mode: screen;
  background-position: center;
  background-image: ${(props) => props.gradientColor}
    url(${(props) => props.backgroundImage});
`;

export const ErrorText = styled.p`
  width: 100%;
  text-align: right;
  margin: 0;
  font-size: 1.2rem;
  color: red;
`;

export const MyToursContainer = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31.5rem, 1fr));
  grid-gap: 4rem;
  justify-items: center;
  direction: rtl;
  margin-top: 6rem;
`;
