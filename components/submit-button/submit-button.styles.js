import styled, { css } from "styled-components";

export const Button = styled.input`
  width: 15rem;
  height: 4.9rem;
  border: none;
  outline: none;
  border-radius: 4.9rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  margin: 1.6rem 0;
  transition: 0.5s;
  background-color: rgba(24, 123, 205);
  color: #fff;
  font-family: inherit;

  &:hover {
    background-color: rgba(3, 37, 76);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(2px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
