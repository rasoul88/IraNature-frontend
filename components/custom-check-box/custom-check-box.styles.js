import styled from "styled-components";

export const Container = styled.div`
  height: 4rem;
  display: flex;
  border-radius: 5rem;
  overflow: hidden;
  background-color: #888;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const CheckboxItem = styled.div`
  flex: 1;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-left: 1px solid lightgray;
  text-align: center;
  height: 100%;
  background-color: ${(props) => (props.selected ? "#1976D2" : "unset")};

  &:first-child {
    border-left: none;
  }
`;
