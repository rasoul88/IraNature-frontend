import React from "react";
import Image from "next/image";
import {
  FooterContainer,
  LogoContainer,
  LinksContainer,
  ContactContainer,
  IconsContainer,
  SocialIconContainer,
  Copyright,
} from "./footer.styles";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Telegram from "../../public/assets/icons/telegram.svg";

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <Image
        src="/assets/logo/azadi-512x512.png"
        alt="iranature"
        layout="fill"
      />
    </LogoContainer>
    <LinksContainer>
      <li>درباره ایرانیچر</li>
      <li>سوالات متداول</li>
      <li>وبلاگ ایرانیچر</li>
      <li>قوانین</li>
      <li>تماس با پشتیبانی</li>
      <li>همکاری با ایرانیچر</li>
    </LinksContainer>
    <ContactContainer>
      <h3>ما را در شبکه های اجتماعی دنبال کنید</h3>
      <IconsContainer>
        <SocialIconContainer color="#8a3ab9">
          <Instagram />
        </SocialIconContainer>
        <SocialIconContainer color="#00acee">
          <Twitter />
        </SocialIconContainer>
        <SocialIconContainer color="#0088cc">
          <Telegram />
        </SocialIconContainer>
        <SocialIconContainer color="#0e76a8">
          <Linkedin />
        </SocialIconContainer>
      </IconsContainer>
    </ContactContainer>
    <Copyright>
      <p>.کلیه حقوق این وب‌سایت محفوظ و متعلق به آقای رسول صحرایی است &copy;</p>
    </Copyright>
  </FooterContainer>
);

export default Footer;
