import React from "react";
import { HeadingContainer, Heading2 } from "./heading.styles";

const SecodaryHeading = ({ children, background, style }) => (
  <HeadingContainer
  // data-aos="zoom-in-down"
  // data-aos-anchor-placement="top-bottom"
  // data-aos-duration="1000"
  // data-aos-delay="100"
  >
    <Heading2 style={style} background={background}>
      {children}
    </Heading2>
  </HeadingContainer>
);

export default SecodaryHeading;
