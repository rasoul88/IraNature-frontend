import React, { useState } from "react";
import {
  CardContainer,
  FrontContainer,
  BackContainer,
  ImageContainer,
  HeadingContainer,
  SpanContainer,
  DetailsContainer,
  CtaContainer,
  PriceContainer,
  OnlyContainer,
  ValueContainer,
  DetailButton,
  Arrow,
} from "./card.styles";

import CustomButton from "../custom-button/custom-button.component";

const Card = ({
  title,
  items,
  backgroundImage,
  gradientColor,
  gradientText,
  payValue,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <CardContainer
      data-aos="zoom-in-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      data-aos-delay="150"
    >
      <FrontContainer>
        <ImageContainer
          gradientColor={gradientColor}
          backgroundImage={backgroundImage}
        >
          &nbsp;
        </ImageContainer>
        <HeadingContainer
          gradientColor={gradientColor}
          gradientText={gradientText}
        >
          <SpanContainer>{title}</SpanContainer>
        </HeadingContainer>
        <DetailsContainer>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </DetailsContainer>
      </FrontContainer>
      <BackContainer gradientColor={gradientColor} isOpen={isOpen}>
        {/* <DetailButton onClick={() => setOpen(!isOpen)} >&#11167;</DetailButton> */}
        <DetailButton onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
          {" "}
          <Arrow />{" "}
        </DetailButton>
        <CtaContainer>
          <PriceContainer>
            <OnlyContainer>فقط</OnlyContainer>
            <ValueContainer>{payValue}</ValueContainer>
          </PriceContainer>
          <CustomButton
            targetElement="#popup"
            color="#999"
            backgroundColor="white"
          >
            همین الان رزرو کن
          </CustomButton>
        </CtaContainer>
      </BackContainer>
    </CardContainer>
  );
};

export default Card;
