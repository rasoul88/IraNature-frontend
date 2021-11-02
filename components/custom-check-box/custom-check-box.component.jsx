import React from "react";
import { Container, CheckboxItem } from "./custom-check-box.styles";

const CustomCheckbox = ({
  children,
  selectedValues,
  onChange,
  singleChoice,
  ...otherProps
}) => {
  const onItemClick = (childKey) => {
    if (singleChoice) return onChange(childKey);

    if (selectedValues.includes(childKey)) {
      const newSelectedArr = selectedValues.filter((el) => el !== childKey);
      onChange(newSelectedArr);
    } else {
      onChange([...selectedValues, childKey]);
    }
  };

  return (
    <Container {...otherProps}>
      {children.map((child) => (
        <CheckboxItem
          key={child.key}
          {...child.props}
          onClick={() => onItemClick(child.key)}
          selected={selectedValues.includes(child.key)}
        />
      ))}
    </Container>
  );
};

export default CustomCheckbox;
