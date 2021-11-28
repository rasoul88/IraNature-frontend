import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  /* border: 1px solid darkgray; */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  overflow: hidden;

  & > svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
