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
import {
  createGradientbackground,
  createGradientText,
} from "../../utils/functions";

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
          // gradientColor={createGradientbackground(
          //   tour.gradientColor.from,
          //   tour.gradientColor.to
          // )}
          backgroundImage={backgroundImage}
          // backgroundImage={`http://localhost:6060/img/tours/${tour.imageCover}`}
        >
          &nbsp;
        </ImageContainer>
        <HeadingContainer
          gradientColor={gradientColor}
          // gradientColor={createGradientbackground(
          //   tour.gradientColor.from,
          //   tour.gradientColor.to
          // )}
          gradientText={gradientText}
          // gradientColor={createGradientText(
          //   tour.gradientColor.from,
          //   tour.gradientColor.to
          // )}
        >
          <SpanContainer>{title}</SpanContainer>
          {/* <SpanContainer>{tour.name}</SpanContainer> */}
        </HeadingContainer>
        <DetailsContainer>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {/* <li>{tour.destination}</li>
            <li>روزه {tour.duration} تور</li>
            <li>نفر {tour.maxGroupSize} تا</li>
            <li>{tour.guides.length}تعداد راهنما:</li>
            <li>{tour.difficulty}دشواری:</li> */}
          </ul>
        </DetailsContainer>
      </FrontContainer>
      <BackContainer
        gradientColor={gradientColor}
        // gradientColor={createGradientbackground(
        //   tour.gradientColor.from,
        //   tour.gradientColor.to
        // )}
        isOpen={isOpen}
      >
        {/* <DetailButton onClick={() => setOpen(!isOpen)} >&#11167;</DetailButton> */}
        <DetailButton onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
          {" "}
          <Arrow />{" "}
        </DetailButton>
        <CtaContainer>
          <PriceContainer>
            <OnlyContainer>فقط</OnlyContainer>
            <ValueContainer>{payValue}</ValueContainer>
            {/* <ValueContainer>{tour.price}</ValueContainer> */}
          </PriceContainer>
          <CustomButton
            onClick={() =>
              router.push({
                pathname: `/tours/${id}`,
                // pathname: `/tours/${tour._id}`,
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
