import styled from "styled-components";
import RightIcon from "../../public/assets/icons/chevron-right-svgrepo-com.svg";
import LeftIcon from "../../public/assets/icons/chevron-left-svgrepo-com.svg";

export const Container = styled.div`
  width: ${(props) =>
    props.maxPage > 7 ? "50rem" : `${props.maxPage * 7.2 + 11.1}rem`};
  height: 6rem;
  background-color: white;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5rem;
  & > * {
    cursor: pointer;
  }
`;

export const NumberContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right: 1px solid lightgray;
  /* ${(props) =>
    props.selectedPage && "background-color: #1976D2; color: white"} */
  ${(props) =>
    props.selectedPage && "background-color: lightgray; color: white"}

  &:hover {
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  }
`;

export const NextButton = styled(RightIcon)`
  height: 100%;
  color: #444;
  border-radius: 0 5rem 5rem 0;
  &:hover {
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  }
`;

export const PrevButton = styled(LeftIcon)`
  height: 100%;
  border-right: 1px solid lightgray;
  color: #444;
  border-radius: 5rem 0 0 5rem;
  &:hover {
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%);
  }
`;
