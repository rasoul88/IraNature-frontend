import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  direction: ltr;

  & svg {
    transform: scale(0.6);
    margin-left: -1rem;
    fill: ${(props) => props.iconColor};
    cursor: ${(props) => (props.selectable ? "pointer" : "default")};

    &:hover {
      transform: ${(props) => (props.selectable ? "scale(0.7)" : "scale(0.6)")};
    }
  }
`;
