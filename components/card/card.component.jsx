import React, { useState } from "react";
import { useRouter } from "next/router";
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

const Card = (props) => {
  const {
    id,
    title,
    items,
    backgroundImage,
    gradientColor,
    gradientText,
    payValue,
  } = props;
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
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
            onClick={() =>
              router.push({
                pathname: `/tours/${id}`,
              })
            }
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
