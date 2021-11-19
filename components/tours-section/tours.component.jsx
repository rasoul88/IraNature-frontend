import React from "react";
import * as nextRouter from "next/router";
import {
  ToursContainer,
  CardsContainer,
  ButtonContainer,
} from "./tours.styles";

import Card from "../card/card.component";
import SecondaryHeading from "../heading/heading.component";
import CustomButton from "../custom-button/custom-button.component";

const Tours = ({ tours }) => {
  const router = nextRouter.useRouter();
  return (
    <ToursContainer id="section-tours">
      <SecondaryHeading>محبوب ترین تورها</SecondaryHeading>
      <CardsContainer>
        {tours.data.docs.map((tour) => (
          <Card key={tour.id} tour={tour} />
        ))}
      </CardsContainer>
      <ButtonContainer
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="50"
      >
        <CustomButton
          onClick={() => router.push("/tours")}
          color="#f7f7f7"
          backgroundColor="rgb(3, 37, 76)"
        >
          همه تورها را ببینید
        </CustomButton>
      </ButtonContainer>
    </ToursContainer>
  );
};

export default Tours;
