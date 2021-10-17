import React from "react";
import { Button } from "./custom-button.styles";
const CustomButton = ({ children, targetElement, ...otherProps }) => (
  <Button href={targetElement} {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;
