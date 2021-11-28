import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const MoreButtonStyled = styled(CustomButton)`
  &,
  &:link,
  &:visited {
    border-radius: 7px;
    padding: 0.75rem;

    &::after {
      border-radius: 7px;
    }
  }

  &:hover {
    color: #f7f7f7;
    background-color: rgb(3, 37, 76);

    &::after {
      background-color: rgb(3, 37, 76);
    }
  }
`;
