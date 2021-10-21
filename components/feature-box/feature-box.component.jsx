import React from "react";
import { FeatureBoxContainer, SVGContainer } from "./feature-box.styles";

const FeatureBox = ({ id, title, content, SVG }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      data-aos-delay="150"
    >
      <FeatureBoxContainer>
        <SVGContainer id={id}>
          <SVG />
        </SVGContainer>
        <h3>{title}</h3>
        <p>{content}</p>
      </FeatureBoxContainer>
    </div>
  );
};

export default FeatureBox;
