import React from "react";
import {
  AboutContainer,
  ContentContainer,
  TextsContainer,
  CompositionContainer,
  Paragraph,
  ImageContainer1,
  ImageContainer2,
  ImageContainer3,
} from "./about.styles";

import SecondaryHeading from "../heading/heading.component";
import MoreButton from "../more-button/more-button.component";
const About = () => (
  <AboutContainer id="about">
    <SecondaryHeading> تورهای هیجان انگیز برای افراد ماجراجو </SecondaryHeading>
    <ContentContainer>
      <TextsContainer
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h3>قرار است عاشق طبیعت شوید</h3>
        <Paragraph>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.
        </Paragraph>
        <h3>خاطره های به یاد ماندنی می سازید</h3>
        <Paragraph>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </Paragraph>
        <MoreButton
          targetElement="#About"
          color="rgb(3, 37, 76)"
          backgroundColor="F7F7F7"
        >
          &larr; بیشتر بدانید
        </MoreButton>
      </TextsContainer>
      <CompositionContainer
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <ImageContainer1 src="/assets/img/iran1.jpg" alt="1" />
        <ImageContainer2 src="/assets/img/damavand.jpg" alt="2" />
        <ImageContainer3 src="/assets/img/shirez3.jpg" alt="3" />
      </CompositionContainer>
    </ContentContainer>
  </AboutContainer>
);

export default About;
