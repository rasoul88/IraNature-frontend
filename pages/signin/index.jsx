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
  ForgotPasswordButton,
  SignInFormContainer,
  ForgotFormContainer,
} from "./index.styles";
import UserIcon from "../../public/assets/icons/user.svg";
import KeyIcon from "../../public/assets/icons/key2.svg";
import MailIcon from "../../public/assets/icons/envelop.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Google from "../../public/assets/icons/google.svg";

const reducer = (state, action) => {
  switch (action.type) {
    case "setMode":
      return {
        ...state,
        mode: action.payload,
      };
    case "forgotPassword":
      return {
        ...state,
        forgotPassword: action.payload,
      };
  }
};
const SignInSignUpPage = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    mode: "signin",
    forgotPassword: false,
  });

  return (
    <SectionContainer
      data-test="component-signin-signup"
      id="signin-signup"
      mode={state.mode}
    >
      <FormsContainer
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <SignInSignUp mode={state.mode}>
          <SignInForm
            mode={state.mode}
            action=""
            onSubmit={() => alert("helllo")}
          >
            {state.forgotPassword ? (
              <ForgotFormContainer>
                <TitleContainer> بازیابی رمز عبور</TitleContainer>
                <InputContainer>
                  <InputField type="email" required placeholder="ایمیل" />
                  <MailIcon />
                </InputContainer>
                <SubmitButton type="submit" value="بازیابی " solid />
                <ForgotPasswordButton
                  data-test="singinWithPassword-button"
                  onClick={() =>
                    dispatch({ type: "forgotPassword", payload: false })
                  }
                >
                  ورود با رمز عبور
                </ForgotPasswordButton>
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
              </ForgotFormContainer>
            ) : (
              <SignInFormContainer>
                <TitleContainer> ورود</TitleContainer>
                <InputContainer>
                  <InputField type="text" required placeholder="نام کاربری" />
                  <UserIcon />
                </InputContainer>
                <InputContainer>
                  <InputField
                    type="password"
                    required
                    placeholder="کلمه عبور"
                  />
                  <KeyIcon />
                </InputContainer>
                <SubmitButton type="submit" value="ورود به حساب " solid />
                <ForgotPasswordButton
                  data-test="forgotPassword-button"
                  onClick={() =>
                    dispatch({ type: "forgotPassword", payload: true })
                  }
                >
                  رمز عبور خود را فراموش کرده اید؟
                </ForgotPasswordButton>
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
              </SignInFormContainer>
            )}
          </SignInForm>

          <SignUpForm mode={state.mode} action="">
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
        <LeftPannelsContainer mode={state.mode}>
          <ContentContainer>
            <h3>حساب کاربری ندارید؟</h3>
            <p>
              {" "}
              لطفا بر روی دکمه ی زیر کلیک کنید و با ایجاد حساب کاربری از تمام
              مزایای وب سایت ما بهره مند شوید
            </p>
            <button
              data-test="signup-button"
              onClick={() => dispatch({ type: "setMode", payload: "signup" })}
            >
              ثبت نام
            </button>
          </ContentContainer>
          <ImageContainer src="/assets/icons/register.svg" alt="login" />
        </LeftPannelsContainer>

        <RightPannelsContainer mode={state.mode}>
          <ContentContainer>
            <h3>حساب کاربری دارید؟</h3>
            <p>
              {" "}
              لطفا بر روی دکمه ی زیر کلیک کنید و با ورود به حساب کاربری که قبلا
              ایجاد کرده اید از تمام مزایای وب سایت ما بهره مند شوید
            </p>
            <button
              data-test="signin-button"
              onClick={() => dispatch({ type: "setMode", payload: "signin" })}
            >
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
