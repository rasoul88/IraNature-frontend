import React from "react";
import {
  TitleContainer,
  InputContainer,
  InputField,
  SocialTextContainer,
  SocialMediaContainer,
  SocialIconContainer,
  ForgotPasswordButton,
  SignInFormContainer,
  ErrorText,
} from "../../pages/signin/index.styles";
import SubmitButton from "../../components/submit-button/submit-button.component";
import KeyIcon from "../../public/assets/icons/key2.svg";
import MailIcon from "../../public/assets/icons/envelop.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Google from "../../public/assets/icons/google.svg";

const SignInForm = ({ URDispatch, emailSignInStart }) => {
  const credentialsRef = React.useRef([]);

  const [errors, setErrors] = React.useState({
    emailErr: false,
    passErr: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const email = credentialsRef.current[0].value;
    const password = credentialsRef.current[1].value;
    if (!email || !password) {
      return setErrors({ emailErr: !email, passErr: !password });
    }
    setErrors({ emailErr: false, passErr: false });
    emailSignInStart({
      email,
      password,
    });
  };
  return (
    <form data-test="component-signin-form" onSubmit={onFormSubmit}>
      <SignInFormContainer>
        <TitleContainer> ورود</TitleContainer>
        <InputContainer>
          <InputField
            ref={(el) => (credentialsRef.current[0] = el)}
            type="email"
            placeholder="ایمیل"
          />
          <MailIcon />
        </InputContainer>
        {errors.emailErr && (
          <ErrorText data-test="email-error-text">
            لطفا ایمیل را وارد کنید
          </ErrorText>
        )}
        <InputContainer>
          <InputField
            ref={(el) => (credentialsRef.current[1] = el)}
            type="password"
            placeholder="کلمه عبور"
          />
          <KeyIcon />
        </InputContainer>
        {errors.passErr && (
          <ErrorText data-test="password-error-text">
            لطفا کلمه عبور را وارد کنید
          </ErrorText>
        )}
        <SubmitButton value="ورود به حساب " solid />
        <ForgotPasswordButton
          data-test="forgotPassword-button"
          onClick={() => URDispatch({ type: "forgotPassword", payload: true })}
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
    </form>
  );
};

export default SignInForm;
