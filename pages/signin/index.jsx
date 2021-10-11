import React from "react";
import {
  SectionContainer,
  FormsContainer,
  SignInSignUp,
  SignInForm,
  TitleContainer,
  InputContainer,
  InputField,
  SubmitButton,
  SocialTextContainer,
  SocialMediaContainer,
  SocialIconContainer,
  SignUpForm,
  PannelsContainer,
  LeftPannelsContainer,
  RightPannelsContainer,
  ContentContainer,
  ImageContainer,
} from "./index.styles";
import UserIcon from "../../public/assets/icons/user.svg";
import KeyIcon from "../../public/assets/icons/key2.svg";
import MailIcon from "../../public/assets/icons/envelop.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Google from "../../public/assets/icons/google.svg";

const SignInSignUpPage = () => {
  const [mode, setMode] = React.useState("signin");

  return (
    <SectionContainer
      data-test="component-signin-signup"
      id="signin-signup"
      mode={mode}
    >
      <FormsContainer
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <SignInSignUp mode={mode}>
          <SignInForm mode={mode} action="" onSubmit={() => alert("helllo")}>
            <TitleContainer> ورود</TitleContainer>
            <InputContainer>
              <InputField type="text" required placeholder="نام کاربری" />
              <UserIcon />
            </InputContainer>
            <InputContainer>
              <InputField type="password" required placeholder="کلمه عبور" />
              <KeyIcon />
            </InputContainer>
            <SubmitButton type="submit" value="ورود به حساب " solid />
            <SocialTextContainer>
              با شبکه های اجتماعی زیر وارد شوید
            </SocialTextContainer>
            <SocialMediaContainer>
              <SocialIconContainer color="#8a3ab9">
                <Instagram />
              </SocialIconContainer>
              <SocialIconContainer color="#00acee">
                <Twitter />
              </SocialIconContainer>
              <SocialIconContainer color="#ea4335">
                <Google />
              </SocialIconContainer>
              <SocialIconContainer color="#0e76a8">
                <Linkedin />
              </SocialIconContainer>
            </SocialMediaContainer>
          </SignInForm>

          <SignUpForm mode={mode} action="">
            <TitleContainer>ثبت نام</TitleContainer>
            <InputContainer>
              <InputField type="text" required placeholder="نام کاربری" />
              <UserIcon />
            </InputContainer>
            <InputContainer>
              <InputField type="email" required placeholder="ایمیل" />
              <MailIcon />
            </InputContainer>
            <InputContainer>
              <InputField type="password" required placeholder="کلمه عبور" />
              <KeyIcon />
            </InputContainer>
            <SubmitButton type="submit" value="ثبت نام" />
            <SocialTextContainer>
              با شبکه های اجتماعی زیر ثبت نام کنید{" "}
            </SocialTextContainer>
            <SocialMediaContainer>
              <SocialIconContainer color="#8a3ab9">
                <Instagram />
              </SocialIconContainer>
              <SocialIconContainer color="#00acee">
                <Twitter />
              </SocialIconContainer>
              <SocialIconContainer color="#ea4335">
                <Google />
              </SocialIconContainer>
              <SocialIconContainer color="#0e76a8">
                <Linkedin />
              </SocialIconContainer>
            </SocialMediaContainer>
          </SignUpForm>
        </SignInSignUp>
      </FormsContainer>

      <PannelsContainer>
        <LeftPannelsContainer mode={mode}>
          <ContentContainer>
            <h3>حساب کاربری ندارید؟</h3>
            <p>
              {" "}
              لطفا بر روی دکمه ی زیر کلیک کنید و با ایجاد حساب کاربری از تمام
              مزایای وب سایت ما بهره مند شوید
            </p>
            <button data-test="signup-button" onClick={() => setMode("signup")}>
              ثبت نام
            </button>
          </ContentContainer>
          <ImageContainer src="/assets/icons/register.svg" alt="login" />
        </LeftPannelsContainer>
        <RightPannelsContainer mode={mode}>
          <ContentContainer>
            <h3>حساب کاربری دارید؟</h3>
            <p>
              {" "}
              لطفا بر روی دکمه ی زیر کلیک کنید و با ورود به حساب کاربری که قبلا
              ایجاد کرده اید از تمام مزایای وب سایت ما بهره مند شوید
            </p>
            <button data-test="signin-button" onClick={() => setMode("signin")}>
              ورود
            </button>
          </ContentContainer>
          <ImageContainer src="/assets/icons/Login2.svg" alt="register" />
        </RightPannelsContainer>
      </PannelsContainer>
    </SectionContainer>
  );
};

export default SignInSignUpPage;
