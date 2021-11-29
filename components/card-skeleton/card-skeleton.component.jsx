import React from "react";
import {
  CardContainer,
  FrontContainer,
  BackContainer,
  ImageContainer,
  HeadingContainer,
  DetailsContainer,
  CtaContainer,
  PriceContainer,
  OnlyContainer,
  ValueContainer,
  DetailButton,
} from "./card-skeleton.styles";

import {
  createGradientbackground,
  createGradientText,
} from "../../utils/functions";

const CardSkeleton = () => {
  return (
    <CardContainer
      data-aos="zoom-in-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      data-aos-delay="150"
    >
      <FrontContainer>
        <ImageContainer
          gradientColor={createGradientbackground("#6d6d6d", "#6e6e6e")}
        >
          &nbsp;
        </ImageContainer>
        <HeadingContainer
          gradientText={createGradientText("#505050", "#5d5d5d")}
        ></HeadingContainer>
        <DetailsContainer>
          <ul>
            <li>----------</li>
            <li>----------</li>
            <li>----------</li>
            <li>----------</li>
            <li>----------</li>
          </ul>
        </DetailsContainer>
      </FrontContainer>
      <BackContainer gradientColor={createGradientbackground("#333", "#666")}>
        <DetailButton></DetailButton>
        <CtaContainer>
          <PriceContainer>
            <OnlyContainer>---</OnlyContainer>
            <ValueContainer>-------</ValueContainer>
          </PriceContainer>
          <ValueContainer style={{ height: "6rem", width: "21.5rem" }}>
            -------
          </ValueContainer>
        </CtaContainer>
      </BackContainer>
    </CardContainer>
  );
};

export default CardSkeleton;
