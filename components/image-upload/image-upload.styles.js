import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  min-height: 12rem;
  position: relative;

  & svg {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    right: calc(50% - 1.25rem);
    /* right: 0; */
    top: 2px;
    z-index: 2;
    fill: #ff2a2a;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      box-shadow: 0 0.2rem 2rem rgb(255 0 0 / 100%);
    }
  }
`;

export const Label = styled.label`
  width: 80%;
  cursor: pointer;
  border-radius: 5px;
  border: 1px dashed darkgray;
  margin-top: 3px;
  background-color: #f7f7f7;

  & > svg {
    width: 5rem;
    height: 5rem;
  }

  & > h5 {
    margin: 1rem 0 0.1rem;
    font-size: 1.3rem;
    font-weight: normal;
  }

  & > p {
    margin: 0;
    font-size: 1.3rem;
    font-weight: thin;
  }
`;
