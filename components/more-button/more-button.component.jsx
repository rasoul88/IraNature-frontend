import React from "react";
import { MoreButtonStyled } from "./more-button.styles";
const MoreButton = ({children, ...otherProps}) => (
    <MoreButtonStyled {...otherProps}>{children}</MoreButtonStyled>
)

export default MoreButton;