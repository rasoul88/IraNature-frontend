import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    transform: scale(0.6);
    margin-left: -1rem;
    fill: ${(props) => props.iconColor};
  }
`;
