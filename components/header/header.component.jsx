import React from "react";
import Image from "next/image";
import {
  HeaderContainer,
  LogoContainer,
  TextBoxContainer,
  HeadingContainer,
} from "./header.styles";

import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/assets/logo/azadi-512x512.png"
          alt="iranature"
          layout="fill"
        />
      </LogoContainer>
      <TextBoxContainer>
        <HeadingContainer>
          <span>...ایرانیچر</span>
          <span style={{ textAlign: "center" }}>
            شما را با طبیعت آشنا می کند
          </span>
        </HeadingContainer>
        <CustomButton
          targetElement="#section-tours"
          color="#777"
          backgroundColor="white"
          animation="moveInBottom"
        >
          محبوب ترین تورها
        </CustomButton>
      </TextBoxContainer>
    </HeaderContainer>
  );
};

export default Header;
