import React from "react";
import { Input } from "./custom-input.styles";
const CustomInput = ({ children, ...otherProps }) => (
  <Input {...otherProps}>{children}</Input>
);

export default CustomInput;
