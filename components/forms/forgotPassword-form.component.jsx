import React from "react";
import {
  TitleContainer,
  InputContainer,
  InputField,
  SocialTextContainer,
  SocialMediaContainer,
  SocialIconContainer,
  ForgotPasswordButton,
  ForgotFormContainer,
  ErrorText,
} from "../../pages/signin/index.styles";
import SubmitButton from "../../components/submit-button/submit-button.component";

import MailIcon from "../../public/assets/icons/envelop.svg";
import Instagram from "../../public/assets/icons/instagram.svg";
import Linkedin from "../../public/assets/icons/linkedin.svg";
import Twitter from "../../public/assets/icons/twitter.svg";
import Google from "../../public/assets/icons/google.svg";
import SpinButton from "../../components/spin-button/spin-button.component";

const ForgotPasswordForm = ({ URDispatch, forgotPassword, isFetching }) => {
  const emailRef = React.useRef();
  const [errors, setErrors] = React.useState({
    emailErr: false,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      return setErrors({ emailErr: !email });
    }
    setErrors({ emailErr: false });
    forgotPassword(email);
  };

  return (
    <form data-test="component-forgotPasssword-form" onSubmit={onFormSubmit}>
      <ForgotFormContainer>
        <TitleContainer> بازنشانی رمز عبور</TitleContainer>
        <InputContainer>
          <InputField ref={emailRef} type="email" placeholder="ایمیل" />
          <MailIcon />
        </InputContainer>
        {errors.emailErr && (
          <ErrorText data-test="email-error-text">
            لطفا ایمیل را وارد کنید
          </ErrorText>
        )}
        {isFetching ? <SpinButton /> : <SubmitButton value="بازنشانی " solid />}
        <ForgotPasswordButton
          data-test="singinWithPassword-button"
          onClick={() =>
            URDispatch({
              type: "forgotPassword",
              payload: false,
            })
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
    </form>
  );
};

export default ForgotPasswordForm;
