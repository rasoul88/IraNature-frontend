import React from "react";
import { Container, CheckboxItem } from "./custom-check-box.styles";

const CustomRadioButton = ({
  children,
  selectedValues,
  onChange,
  ...otherProps
}) => {
  return (
    <Container {...otherProps}>
      {children.map((child) => (
        <CheckboxItem
          key={child.key}
          {...child.props}
          onClick={() => {
            if (selectedValues.includes(child.key)) {
              const newSelectedArr = selectedValues.filter(
                (el) => el !== child.key
              );
              onChange(newSelectedArr);
            } else {
              onChange([...selectedValues, child.key]);
            }
          }}
          selected={selectedValues.includes(child.key)}
        />
      ))}
    </Container>
  );
};

export default CustomRadioButton;
