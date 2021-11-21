import styled from "styled-components";

export const Container = styled.div`
  width: 40rem;
  min-width: 40rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  direction: rtl;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  border-radius: 10px;
  margin: 0 2rem;
  height: 25rem;
  position: relative;
  background-color: white;

  @media only screen and (max-width: 22em) {
    min-width: 100%;
  }

  @media only screen and (hover: none) {
    scroll-snap-align: center;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;

    & > h4 {
      margin: 0;
      font-size: 1.4rem;
    }
    & > p {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  overflow-y: auto;
  direction: ltr;
  text-align: right;
  padding: 0 0.5rem;
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
    /* background: linear-gradient(45deg, #021b79, #0575e6, #205e9b); */
    background-color: ${(props) => props.iconColor};
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  left: 3px;
  bottom: -2px;
  cursor: pointer;

  & svg {
    fill: ${(props) => props.iconColor};
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
