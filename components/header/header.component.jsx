import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  TextBoxContainer,
  HeadingContainer,
  Logo,
} from "./header.styles";

import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        {/* <TextLogo>iraNature</TextLogo> */}
        <Logo />
      </LogoContainer>
      <TextBoxContainer>
        <HeadingContainer>
          <span>...ایرانیچر</span>
          <span>شما را با طبیعت آشتی می دهد</span>
        </HeadingContainer>
        <CustomButton
          targetElement="#section-tours"
          color="#777"
          backgroundColor="white"
          animation="moveInBottom"
        >
          تور های ما را ببینید
        </CustomButton>
      </TextBoxContainer>
    </HeaderContainer>
  );
};

export default Header;
