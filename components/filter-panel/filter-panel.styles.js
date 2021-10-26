import styled, { css } from "styled-components";

const scrollbarStyle = css`
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: white;
    border-radius: 8px;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: linear-gradient(45deg, #021b79, #0575e6, #205e9b);
  }
`;

export const PanelContainer = styled.div`
  width: 30rem;
  background: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 100;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-30rem)"};
`;

export const FilterIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 5rem;
  height: 4rem;
  padding-right: 0.5rem;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  right: -3rem;
  top: 5rem;
  cursor: pointer;

  @media only screen and (max-width: 28.75em) {
    top: 10rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.5s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  ${scrollbarStyle}
`;

export const PanelHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 1.5rem;
  border-bottom: 1px solid lightgray;

  & > p {
    font-size: 1.4rem;
    width: 3rem;
    height: 2rem;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
  }
`;

export const FilterItemContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;

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
`;

export const ItemHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-size: 1.3rem;
    color: #333;
  }

  & > h5 {
    margin: 1rem 0;
  }
`;
